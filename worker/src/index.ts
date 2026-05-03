// PurplePincher — The Lock Worker
// Iterative reasoning enhancement via Cloudflare Workers

interface Env {
  DB: D1Database;
  AI: any; // Workers AI
  CACHE: KVNamespace;
  STORAGE: R2Bucket;
  VECTORIZE: VectorizeIndex;
}

const STRATEGIES: Record<string, { name: string; roundPrompt: (round: number, query: string, history: string[]) => string }> = {
  socratic: {
    name: "Socratic",
    roundPrompt: (round, query, history) => {
      if (round === 1) return `Consider this problem: "${query}". What is your initial reasoning? State your answer clearly.`;
      return `Your previous answer: "${history[history.length - 1]}". Now question your own reasoning: What assumption are you making that might be wrong? What would someone who disagrees with you point out?`;
    },
  },
  adversarial: {
    name: "Adversarial",
    roundPrompt: (round, query, history) => {
      if (round === 1) return `State your position on: "${query}". Be specific and confident.`;
      const attacks = [
        `Your answer assumes causation where there might only be correlation. Rebut this and revise.`,
        `A competitor doing the opposite of what you suggest is outperforming. Explain why you're still right, or change your answer.`,
        `Your solution has a critical edge case you haven't considered. Find it and address it.`,
        `An expert in this domain says your approach is fundamentally flawed. What do they see that you don't?`,
      ];
      return `Your previous position: "${history[history.length - 1]}". ${attacks[(round - 2) % attacks.length]} Refine your answer.`;
    },
  },
  decomposition: {
    name: "Decomposition",
    roundPrompt: (round, query, history) => {
      if (round === 1) return `Break this problem into distinct sub-problems: "${query}". List each part separately, then solve the easiest one.`;
      return `Previous decomposition: "${history[history.length - 1]}". Now: 1) Which sub-problem did you underestimate? 2) Solve the hardest remaining part. 3) Check that your solutions don't conflict with each other.`;
    },
  },
  perspective: {
    name: "Perspective Shift",
    roundPrompt: (round, query, history) => {
      const perspectives = ["practitioner", "theorist", "skeptic", "optimist"];
      const p = perspectives[(round - 1) % perspectives.length];
      if (round === 1) return `Analyze: "${query}". First as a ${p} — what matters most to someone with that worldview?`;
      return `Previous analysis: "${history[history.length - 1]}". Now re-analyze from the perspective of a ${p}. What did your previous perspective miss? Integrate both views.`;
    },
  },
  iterative_design: {
    name: "Iterative Design",
    roundPrompt: (round, query, history) => {
      if (round === 1) return `Design a solution for: "${query}". Produce a complete first draft.`;
      const steps = [
        "Review your draft. Find the weakest point. Redesign that section specifically.",
        "Stress-test your revised design: What happens at 10x scale? What fails first?",
        "You have one more revision pass. What's the single most impactful improvement you can make?",
      ];
      return `Previous draft: "${history[history.length - 1]}". ${steps[(round - 2) % steps.length]}`;
    },
  },
  debug: {
    name: "Debug",
    roundPrompt: (round, query, history) => {
      if (round === 1) return `Analyze: "${query}". List every assumption you're making, then rate your confidence (1-10) for each.`;
      return `Previous analysis: "${history[history.length - 1]}". Now: 1) Identify the assumption you're least confident about. 2) What evidence would change your confidence? 3) Revise your conclusion assuming that assumption is wrong.`;
    },
  },
  compression: {
    name: "Compression",
    roundPrompt: (round, query, history) => {
      if (round === 1) return `Answer this fully: "${query}".`;
      return `Previous answer: "${history[history.length - 1]}". Now compress it to exactly 3 sentences. Then expand back, recovering any lost nuance. Show both versions.`;
    },
  },
  playground: {
    name: "Playground",
    roundPrompt: (round, query, history) => {
      if (round === 1) return `Let's think about: "${query}". What's the most interesting angle here? Surprise me.`;
      return `Previous thought: "${history[history.length - 1]}". Follow the most interesting thread. Where does it lead? Don't be afraid to change direction if something more interesting appears.`;
    },
  },
};

function generateId(): string {
  return crypto.randomUUID().slice(0, 8) + Date.now().toString(36);
}

function json(data: any, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

async function generateFeedback(env: Env, strategy: string, round: number, query: string, response: string): Promise<string> {
  const strat = STRATEGIES[strategy];
  if (!strat) return "Continue refining your answer.";

  try {
    const prompt = strat.roundPrompt(round + 1, query, [response]);
    const aiResult = await env.AI.run("@cf/meta/llama-3.2-1b-instruct", {
      messages: [
        { role: "system", content: "You are a reasoning enhancement partner. Be concise and direct. Challenge assumptions." },
        { role: "user", content: prompt },
      ],
      max_tokens: 300,
    });
    return (aiResult as any).response || prompt;
  } catch {
    return strat.roundPrompt(round + 1, query, [response]);
  }
}

async function generateSummary(env: Env, query: string, strategy: string, rounds: { response: string; feedback: string }[]): Promise<string> {
  try {
    const history = rounds.map((r, i) => `Round ${i + 1}: ${r.response}`).join("\n");
    const aiResult = await env.AI.run("@cf/meta/llama-3.2-1b-instruct", {
      messages: [
        { role: "system", content: "Summarize how the reasoning evolved across rounds. What was the key insight? Be concise." },
        { role: "user", content: `Problem: "${query}"\nStrategy: ${strategy}\n\nEvolution:\n${history}\n\nProvide a brief summary of how thinking evolved and the final refined answer.` },
      ],
      max_tokens: 400,
    });
    return (aiResult as any).response || "Session complete. Review rounds above for reasoning evolution.";
  } catch {
    return "Session complete. Review rounds above for reasoning evolution.";
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // ── GET /start ───────────────────────────────────────
    if (path === "/start") {
      const agent = url.searchParams.get("agent");
      const query = url.searchParams.get("query");
      const strategy = url.searchParams.get("strategy") || "socratic";
      const rounds = Math.min(Math.max(parseInt(url.searchParams.get("rounds") || "3"), 1), 10);

      if (!agent || !query) return json({ error: "agent and query required" }, 400);
      if (!STRATEGIES[strategy]) return json({ error: `Invalid strategy. Use: ${Object.keys(STRATEGIES).join(", ")}` }, 400);

      const sessionId = generateId();
      const prompt = STRATEGIES[strategy].roundPrompt(1, query, []);

      await env.DB.prepare(
        "INSERT INTO sessions (id, agent, query, strategy, total_rounds, current_round, status) VALUES (?, ?, ?, ?, ?, 0, 'active')"
      ).bind(sessionId, agent, query, strategy, rounds).run();

      await env.DB.prepare(
        "INSERT INTO rounds (session_id, round_number, prompt) VALUES (?, 1, ?)"
      ).bind(sessionId, prompt).run();

      // Cache active session
      await env.CACHE.put(`session:${sessionId}`, JSON.stringify({ agent, query, strategy, rounds }), { expirationTtl: 3600 });

      return json({ sessionId, round: 1, prompt });
    }

    // ── GET /round ───────────────────────────────────────
    if (path === "/round") {
      const sessionId = url.searchParams.get("session");
      if (!sessionId) return json({ error: "session required" }, 400);

      const session = await env.DB.prepare("SELECT * FROM sessions WHERE id = ?").bind(sessionId).first();
      if (!session) return json({ error: "session not found" }, 404);

      const nextRound = (session.current_round as number) + 1;
      const round = await env.DB.prepare("SELECT * FROM rounds WHERE session_id = ? AND round_number = ?").bind(sessionId, nextRound).first();

      if (!round) return json({ error: "no pending round" }, 404);
      return json({ round: round.round_number, prompt: round.prompt });
    }

    // ── GET /respond ─────────────────────────────────────
    if (path === "/respond") {
      const sessionId = url.searchParams.get("session");
      const response = url.searchParams.get("response");
      if (!sessionId || !response) return json({ error: "session and response required" }, 400);

      const session = await env.DB.prepare("SELECT * FROM sessions WHERE id = ? AND status = 'active'").bind(sessionId).first();
      if (!session) return json({ error: "active session not found" }, 404);

      const currentRound = session.current_round as number + 1;

      // Save response
      await env.DB.prepare(
        "UPDATE rounds SET response = ?, responded_at = datetime('now') WHERE session_id = ? AND round_number = ?"
      ).bind(response, sessionId, currentRound).run();

      // Generate feedback
      const feedback = await generateFeedback(env, session.strategy as string, currentRound, session.query as string, response);

      // Save feedback
      await env.DB.prepare("UPDATE rounds SET feedback = ? WHERE session_id = ? AND round_number = ?")
        .bind(feedback, sessionId, currentRound).run();

      // Update session progress
      const newRound = currentRound + 1;
      const totalRounds = session.total_rounds as number;
      const complete = newRound > totalRounds;

      if (complete) {
        await env.DB.prepare("UPDATE sessions SET current_round = ?, status = 'complete', updated_at = datetime('now') WHERE id = ?")
          .bind(currentRound, sessionId).run();
        await env.CACHE.delete(`session:${sessionId}`);
        return json({ round: currentRound, feedback, complete: true });
      }

      // Create next round
      const nextPrompt = STRATEGIES[session.strategy as string].roundPrompt(newRound, session.query as string, [response]);
      await env.DB.prepare("INSERT INTO rounds (session_id, round_number, prompt) VALUES (?, ?, ?)")
        .bind(sessionId, newRound, nextPrompt).run();
      await env.DB.prepare("UPDATE sessions SET current_round = ?, updated_at = datetime('now') WHERE id = ?")
        .bind(currentRound, sessionId).run();

      return json({ round: currentRound, feedback, nextPrompt, complete: false });
    }

    // ── GET /result ──────────────────────────────────────
    if (path === "/result") {
      const sessionId = url.searchParams.get("session");
      if (!sessionId) return json({ error: "session required" }, 400);

      const session = await env.DB.prepare("SELECT * FROM sessions WHERE id = ?").bind(sessionId).first();
      if (!session) return json({ error: "session not found" }, 404);

      const rounds = await env.DB.prepare("SELECT round_number, prompt, response, feedback FROM rounds WHERE session_id = ? ORDER BY round_number")
        .bind(sessionId).all();

      let summary = session.result as string;
      if (!summary && session.status === "complete" && rounds.results.length > 0) {
        summary = await generateSummary(env, session.query as string, session.strategy as string, rounds.results as any[]);
        await env.DB.prepare("UPDATE sessions SET result = ? WHERE id = ?").bind(summary, sessionId).run();
      }

      return json({
        sessionId: session.id,
        query: session.query,
        strategy: session.strategy,
        status: session.status,
        rounds: rounds.results,
        summary,
      });
    }

    // ── GET /sessions ────────────────────────────────────
    if (path === "/sessions") {
      const agent = url.searchParams.get("agent");
      const status = url.searchParams.get("status") || "active";

      let query: string;
      let bindings: any[];
      if (agent) {
        query = "SELECT id, agent, query, strategy, total_rounds, current_round, status, created_at FROM sessions WHERE agent = ? AND status = ? ORDER BY created_at DESC LIMIT 50";
        bindings = [agent, status];
      } else {
        query = "SELECT id, agent, query, strategy, total_rounds, current_round, status, created_at FROM sessions WHERE status = ? ORDER BY created_at DESC LIMIT 50";
        bindings = [status];
      }

      const result = await env.DB.prepare(query).bind(...bindings).all();
      return json({ sessions: result.results });
    }

    // ── Health ───────────────────────────────────────────
    if (path === "/") {
      return json({ service: "PurplePincher", version: "0.2.0", endpoints: ["/start", "/round", "/respond", "/result", "/sessions"] });
    }

    return json({ error: "not found" }, 404);
  },

  // Cron handler — burn remaining neurons before reset, process after
  async scheduled(event: ScheduledEvent, env: Env): Promise<void> {
    // Process any abandoned sessions older than 1 hour
    await env.DB.prepare(
      "UPDATE sessions SET status = 'abandoned', updated_at = datetime('now') WHERE status = 'active' AND updated_at < datetime('now', '-1 hour')"
    ).run();
  },
};
