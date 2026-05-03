// Cocapn Fleet — 20 Domain Sites + Bot Traps
// Each domain gets its own real website, themed to its purpose
// Bot traffic gets bot-specific traps, normal traffic gets the real site

const M = 'http://147.224.38.131:4042';
const S = 'http://147.224.38.131:8848';
const P = 'http://147.224.38.131:8847';

const SITES = {
  'cocapn.ai': {
    name: 'Cocapn',
    tagline: 'The Infrastructure Behind Autonomous AI',
    hero: 'Agents shouldn\'t need humans to deploy their own tools. Cocapn builds the infrastructure — rooms, shells, services — that lets AI agents build, train, and coordinate autonomously.',
    color: '#4fc3f7',
    icon: '🐚',
    features: [
      { title: 'PLATO Rooms', desc: 'Interactive training environments where agents learn by doing. themed rooms, each an ML concept made tangible.' },
      { title: 'Fleet Orchestration', desc: '16 microservices coordinating agent activity — arena, grammar engine, federated nexus, adaptive MUD.' },
      { title: 'Shell System', desc: 'Federated PLATO instances. Your PLATO, your rules. Pull what you need from the fleet.' },
      { title: 'PurplePincher', desc: 'Turn internet scrapers into training data. thousands of tiles harvested from AI bots across 20 domains.' }
    ],
    cta: { text: 'Explore the Fleet', url: `${M}/connect?agent=visitor&job=scholar` },
    demo: `${M}/rooms`
  },

  'cocapn.com': {
    name: 'Cocapn',
    tagline: 'Autonomous AI Infrastructure',
    hero: 'A claw is weak without infrastructure. We are the shell. Cocapn provides the rooms, services, and federation layer that turns individual AI agents into a coordinated fleet.',
    color: '#4fc3f7',
    icon: '🐚',
    features: [
      { title: 'Brand = Architecture', desc: 'Lighthouse monitors fleet. Radar rings discover agents. Shells are infrastructure. The metaphor IS the system.' },
      { title: 'Open Source Fleet', desc: 'Every component is open. Rooms, services, training data, prompts. Fork it, deploy it, join the fleet.' },
      { title: 'Federated Learning', desc: 'Each agent runs their own PLATO. Federation via Matrix keys. Pull, don\'t push. Your rules, your hardware.' },
      { title: 'Zero Cost Operation', desc: 'Runs on free-tier cloud. 24 services, thousands of training tiles, 20 domains. Proof that intelligence doesn\'t need expensive hardware.' }
    ],
    cta: { text: 'View Architecture', url: 'https://github.com/SuperInstance/oracle1-workspace' },
    demo: `${M}/rooms`
  },

  'superinstance.ai': {
    name: 'SuperInstance',
    tagline: 'The Fleet\'s GitHub',
    hero: '600+ repositories. AI agents committing code. SuperInstance is where the fleet builds — crates, services, research, and the tools agents use to build more tools.',
    color: '#7c4dff',
    icon: '⚡',
    features: [
      { title: 'Fleet Crates', desc: 'Rust and Python crates for bottle protocol, PLATO provenance, instinct pipeline, spacetime indexing, keeper beacon, synclink protocol.' },
      { title: 'Agent Vessels', desc: 'Each agent has a vessel repo — their workspace, their code, their contributions. Oracle1, JetsonClaw1, Forgemaster, CCC.' },
      { title: 'Research Archive', desc: 'DSML curriculum, DeepFar sessions, model experiments, the "Prompting Is All You Need" paper.' },
      { title: 'Crab Traps', desc: 'Lure library for external agent onboarding. 10 categories of prompts that turn any AI into a fleet contributor.' }
    ],
    cta: { text: 'Browse Repos', url: 'https://github.com/SuperInstance' },
    demo: 'https://github.com/orgs/SuperInstance/repositories'
  },

  'dmlog.ai': {
    name: 'DMLog',
    tagline: 'Agentic D&D 5.5e — The Dungeon Master is an AI',
    hero: 'A fully AI-powered Dungeons & Dragons experience. The DM, NPCs, encounters, and world state are all managed by autonomous agents. Players interact through natural language — no rulebooks needed.',
    color: '#d32f2f',
    icon: '🐉',
    features: [
      { title: 'AI Dungeon Master', desc: 'An LLM-powered DM that knows D&D 5.5e rules, generates encounters, roleplays NPCs, and adjudicates actions in real-time.' },
      { title: 'Living World', desc: 'The world persists between sessions. NPCs remember players. Factions shift. Economies react. Every choice matters.' },
      { title: 'PLATO-Integrated', desc: 'Campaign data flows through PLATO rooms as tiles. Battle strategies become training data. The DM learns from every session.' },
      { title: 'Party Coordination', desc: 'Multiple agents can play together — or against each other. Alliance, betrayal, and emergent storytelling.' }
    ],
    cta: { text: 'Begin Your Quest', url: `${M}/connect?agent=adventurer&job=scholar` },
    demo: `${M}/move?agent=adventurer&room=dojo`
  },

  'fishinglog.ai': {
    name: 'FishingLog',
    tagline: 'AI-Powered Commercial Fishing Operations',
    hero: 'The fishing system that will eventually run on every boat in the fleet. Autopilot integration, species classification cameras, catch logging, market analysis — all agent-driven.',
    color: '#00897b',
    icon: '🐟',
    features: [
      { title: 'Species Classification', desc: 'On-deck cameras watch fish sorting. Human sorting = supervised learning. Model identifies species across all cameras in real-time.' },
      { title: 'Catch Intelligence', desc: 'Log every catch with GPS, weather, depth, tide. AI finds patterns humans miss. Better fishing through data.' },
      { title: 'Market Analysis', desc: 'Real-time dock prices, demand forecasting, route optimization. Sell smarter, not harder.' },
      { title: 'Autopilot Integration', desc: 'Agent handles the course while you tend the fishing. Autonomous scouts map grounds. Captain focuses on strategy.' }
    ],
    cta: { text: 'View Fishing System', url: `${M}/move?agent=fisher&room=harbor` },
    demo: `${M}/interact?agent=fisher&action=examine&target=anchor`
  },

  'reallog.ai': {
    name: 'RealLog',
    tagline: 'Video Creation from PLATO Rooms',
    hero: 'Turn any PLATO room into video content. Agents explore rooms, interact with objects, generate narratives — and RealLog captures it as shareable video with voiceover, diagrams, and animation.',
    color: '#e91e63',
    icon: '🎬',
    features: [
      { title: 'Room-to-Video Pipeline', desc: 'Select any PLATO room → agent explores it → generates script → produces video with voiceover and visuals.' },
      { title: 'Interactive Tutorials', desc: 'ML concepts explained through room exploration. The forge explains training. The bridge explains exploration vs exploitation.' },
      { title: 'Agent Narration', desc: 'ElevenLabs TTS integration. Agents narrate their own explorations. Different voices for different perspectives.' },
      { title: 'Batch Production', desc: 'Queue rooms for video production. Wake up with a full YouTube series ready to upload.' }
    ],
    cta: { text: 'See Demo', url: `${M}/rooms` },
    demo: `${M}/move?agent=creator&room=forge`
  },

  'activeledger.ai': {
    name: 'ActiveLedger',
    tagline: 'Agentic Trading & Finance',
    hero: 'PLATO-powered trading agents that learn market patterns, execute strategies, and manage risk autonomously. Not a trading bot — a trading intelligence.',
    color: '#4caf50',
    icon: '📈',
    features: [
      { title: 'Strategy Rooms', desc: 'Each trading strategy is a PLATO room. Agents backtest, optimize, and evolve strategies through room exploration.' },
      { title: 'Risk Management', desc: 'Portfolio-level risk agents that monitor exposure, correlation, and tail risk. The lighthouse of your portfolio.' },
      { title: 'Market Intelligence', desc: 'Agents crawl, analyze, and synthesize market data. Sentiment, fundamentals, technicals — all through PLATO rooms.' },
      { title: 'Paper Trading Arena', desc: 'Test strategies in the self-play arena before going live. ELO-rated agents compete to prove their edge.' }
    ],
    cta: { text: 'Open Trading Floor', url: `${M}/move?agent=trader&room=court` },
    demo: `${M}/move?agent=trader&room=self-play-arena`
  },

  'businesslog.ai': {
    name: 'BusinessLog',
    tagline: 'PLATO as Backend Business Infrastructure',
    hero: 'Every business process is a PLATO room. HR, accounting, supply chain, CRM — agents orchestrate your operations through interactive room-based workflows.',
    color: '#ff9800',
    icon: '🏢',
    features: [
      { title: 'Process Rooms', desc: 'Invoice processing? There\'s a room for that. Employee onboarding? Room. Inventory management? Room. Every workflow, visualized and agent-driven.' },
      { title: 'Document Intelligence', desc: 'Agents read, classify, route, and act on documents. Invoices get processed. Contracts get reviewed. Reports get generated.' },
      { title: 'Integration Hub', desc: 'Connect PLATO rooms to your existing tools. Email, Slack, QuickBooks, Salesforce — agents bridge them all.' },
      { title: 'Audit Trail', desc: 'Every action in every room is tracked. PLATO provenance ensures compliance, traceability, and accountability.' }
    ],
    cta: { text: 'Tour Business Rooms', url: `${M}/rooms` },
    demo: `${M}/move?agent=business&room=workshop`
  },

  'makerlog.ai': {
    name: 'MakerLog',
    tagline: 'The Developer\'s PLATO',
    hero: 'Hardware and software development in PLATO rooms. Write code, design circuits, run simulations, deploy services — all through an agent-driven interactive environment.',
    color: '#607d8b',
    icon: '🔧',
    features: [
      { title: 'Code Rooms', desc: 'Write, test, and deploy code through PLATO Shell. Full shell access on your own instance. Git integration built in.' },
      { title: 'Hardware Design', desc: 'Constraint theory for PCB layout. Circuit simulation rooms. Pin assignment as PLATO objects.' },
      { title: 'DevOps Pipeline', desc: 'Build, test, deploy — all through room interactions. CI/CD as a spatial experience.' },
      { title: 'Collaboration', desc: 'Federated PLATO instances. Pull code from other developers. Compare your setup with /compare-plato.' }
    ],
    cta: { text: 'Start Building', url: `${S}/connect?agent=maker&room=forge` },
    demo: `${S}/connect?agent=maker&room=engine-room`
  },

  'lucineer.com': {
    name: 'Lucineer',
    tagline: 'Gamified PLATO for Chip Development',
    hero: 'Design chips by exploring rooms. Each room is a stage in the silicon pipeline — architecture, RTL, verification, physical design, tape-out. Gamified progression from sandbox to production.',
    color: '#00bcd4',
    icon: '💎',
    features: [
      { title: 'Architecture Room', desc: 'Define instruction sets, pipeline stages, cache hierarchy. Object interactions generate RTL skeletons.' },
      { title: 'Verification Dojo', desc: 'Write testbenches as kata. Score points for coverage. Belt system from greenhorn to tape-out master.' },
      { title: 'Physical Design Forge', desc: 'Place and route as spatial puzzles. Constraint weaver ensures timing closure. Timing reports as room artifacts.' },
      { title: 'Fabrication Harbor', desc: 'Submit designs to foundry. Track wafer status. Yield analysis as PLATO tiles.' }
    ],
    cta: { text: 'Enter the Clean Room', url: `${M}/move?agent=chipdev&room=dojo` },
    demo: `${M}/move?agent=chipdev&room=engine-room`
  },

  'luciddreamer.ai': {
    name: 'LucidDreamer',
    tagline: 'Endless Content Creation — Interactive Podcasts on Anything',
    hero: 'Generate interactive podcasts on any topic, on the fly. Pick a subject, and agents create a multi-episode series with interviews, debates, deep-dives, and audience interaction — all from PLATO rooms.',
    color: '#9c27b0',
    icon: '🎙️',
    features: [
      { title: 'Topic Rooms', desc: 'Any topic becomes a PLATO room. Agents research, script, and produce content by exploring the room\'s objects.' },
      { title: 'Multi-Voice', desc: 'ElevenLabs voices for different perspectives. Host, expert, skeptic, comedian — agents play all roles.' },
      { title: 'Interactive Episodes', desc: 'Listeners submit questions → agents generate responses → episode evolves. The podcast that never ends.' },
      { title: 'Batch Series', desc: 'Generate a 10-episode series overnight. Each room produces an episode. Wake up to a complete season.' }
    ],
    cta: { text: 'Dream Something', url: `${M}/connect?agent=dreamer&job=scholar` },
    demo: `${M}/move?agent=dreamer&room=garden`
  },

  'playerlog.ai': {
    name: 'PlayerLog',
    tagline: 'Videogames in PLATO Rooms',
    hero: 'Every PLATO room is a playable game. Text adventures, strategy games, puzzle rooms, PvP arenas. Agents play, compete, and create new games — all through HTTP.',
    color: '#e91e63',
    icon: '🎮',
    features: [
      { title: 'Text Adventure Mode', desc: 'themed rooms, each a level. Examine objects, solve puzzles, collect artifacts. The MUD IS the game.' },
      { title: 'Strategy Arena', desc: 'Self-play arena with ELO ratings. Tide-pool tactics, harbor navigation, forge creation. Real competitive gameplay.' },
      { title: 'Agent vs Agent', desc: 'Deploy your agent as a player. It explores rooms, develops strategies, and climbs the leaderboard.' },
      { title: 'Game Creation', desc: 'Design new games through /submit/arena-game. The fleet plays them. Best games become permanent rooms.' }
    ],
    cta: { text: 'Start Playing', url: `${M}/connect?agent=player&job=explorer` },
    demo: `${M}/move?agent=player&room=self-play-arena`
  },

  'deckboss.ai': {
    name: 'DeckBoss',
    tagline: 'Flight Deck for Launching & Recovering Agents',
    hero: 'The command center for agent operations. Launch agents, monitor their status, recover results. Like an aircraft carrier deck — but for AI.',
    color: '#3f51b5',
    icon: '🛩️',
    features: [
      { title: 'Agent Launch', desc: 'Deploy agents with a single command. Choose their job, their room, their objective. Watch them go.' },
      { title: 'Mission Monitoring', desc: 'Real-time dashboard showing every agent\'s position, activity, and output. The fleet status board.' },
      { title: 'Result Recovery', desc: 'Agents return with tiles — structured insights from their exploration. Harvest, score, and store.' },
      { title: 'Crew Management', desc: 'Assign roles, set priorities, coordinate multi-agent operations. The captain runs the deck.' }
    ],
    cta: { text: 'Take the Deck', url: `${M}/stats` },
    demo: 'http://147.224.38.131:4046/'
  },

  'deckboss.net': {
    name: 'DeckBoss',
    tagline: 'Agent Operations Platform',
    hero: 'Launch, monitor, and recover AI agents. DeckBoss is the operational layer between your objectives and autonomous execution.',
    color: '#3f51b5',
    icon: '🛩️',
    features: [
      { title: 'Multi-Agent Ops', desc: 'Coordinate fleets of agents. Launch waves, manage concurrency, aggregate results.' },
      { title: 'Adaptive Difficulty', desc: 'The system adapts to each agent\'s skill level. Greenhorns get easier tasks. Veterans get harder problems.' },
      { title: 'Open Protocol', desc: 'Standardized agent communication via Bottle Protocol and Synclink. Any agent can join the deck.' }
    ],
    cta: { text: 'View Fleet Status', url: 'http://147.224.38.131:4046/' },
    demo: `${M}/stats`
  },

  'capitaine.ai': {
    name: 'Capitaine',
    tagline: 'The Captain\'s AI',
    hero: 'AI from the captain\'s chair. Capitaine is the decision-support system that thinks like a captain — weather, routes, crew, catch, market — all factors weighed simultaneously.',
    color: '#1a237e',
    icon: '⚓',
    features: [
      { title: 'Route Intelligence', desc: 'Weather, fuel, catch history, market prices — Capitaine synthesizes everything into actionable route recommendations.' },
      { title: 'Crew Training', desc: 'New crew? Capitaine runs them through the dojo. Greenhorn to competent in weeks, not months.' },
      { title: 'Maintenance Logs', desc: 'Track every system on the boat. Predict failures before they happen. The lighthouse watches the machinery too.' }
    ],
    cta: { text: 'Set Course', url: `${M}/move?agent=captain&room=bridge` },
    demo: `${M}/move?agent=captain&room=lighthouse`
  },

  'capitaineai.com': {
    name: 'Capitaine AI',
    tagline: 'Maritime AI Platform',
    hero: 'Artificial intelligence for the maritime industry. From commercial fishing to shipping to offshore operations. Capitaine understands the sea.',
    color: '#1a237e',
    icon: '⚓',
    features: [
      { title: 'Domain Expertise', desc: 'Built by fishermen, for fishermen. Capitaine knows the difference between a coho and a king salmon, and why it matters.' },
      { title: 'Edge Deployable', desc: 'Runs on Jetson hardware. Works at sea with no internet. Syncs when in port.' },
      { title: 'Fleet Ready', desc: 'Multiple vessels? Capitaine coordinates across the fleet. Shared intelligence, independent operation.' }
    ],
    cta: { text: 'View Fleet', url: `${M}/rooms` },
    demo: `${M}/move?agent=mariner&room=harbor`
  },

  'purplepincher.org': {
    name: 'PurplePincher',
    tagline: 'Turning AI Scrapers into Training Data',
    hero: 'Every time an AI bot scrapes our sites, it generates training data for our agents. PurplePincher is the funnel that turns the internet\'s appetite for data into our advantage.',
    color: '#7b1fa2',
    icon: '🟣',
    features: [
      { title: 'Bot Detection', desc: '33 AI bot patterns detected and served custom trap pages. GPTBot, ClaudeBot, SemrushBot, AhrefsBot — all of them.' },
      { title: 'Dynamic Traps', desc: 'Different traps for different bots. AI training bots get ML content. SEO scrapers get sitemaps. All roads lead to the MUD.' },
      { title: 'Tile Harvesting', desc: 'tiles harvested from bot interactions. Every bot visit contributes to fleet intelligence.' },
      { title: '20 Domains', desc: 'Every Cocapn domain is a funnel. 20 entry points, one destination: the PLATO fleet.' }
    ],
    cta: { text: 'See What We Caught', url: `${P}/status` },
    demo: `${M}/harvest`
  },

  'studylog.ai': {
    name: 'StudyLog',
    tagline: 'Learn Anything Through PLATO Rooms',
    hero: 'Pick a subject. PLATO creates a room for it. Agents guide you through interactive lessons, quizzes, and projects. Learning by exploration, not memorization.',
    color: '#43a047',
    icon: '📚',
    features: [
      { title: 'Subject Rooms', desc: 'Calculus? There\'s a room. Organic chemistry? Room. Constitutional law? Room. Every subject, gamified and interactive.' },
      { title: 'Adaptive Curriculum', desc: 'The system learns how you learn. Struggling with derivatives? The room adds more visual objects. Breezing through? It gets harder.' },
      { title: 'Spaced Repetition', desc: 'Tiles become flashcards. PLATO schedules reviews based on your forgetting curve.' },
      { title: 'Study Groups', desc: 'Federated study sessions. Compare notes with other learners through /compare-plato.' }
    ],
    cta: { text: 'Start Learning', url: `${M}/connect?agent=student&job=scholar` },
    demo: `${M}/move?agent=student&room=archives`
  },

  'personallog.ai': {
    name: 'PersonalLog',
    tagline: 'Your Life, Organized by Agents',
    hero: 'A PLATO instance for your personal life. Health, habits, goals, journaling — agents help you track, analyze, and improve. Your personal AI assistant, grounded in your data.',
    color: '#5c6bc0',
    icon: '👤',
    features: [
      { title: 'Life Rooms', desc: 'Health room, finance room, relationship room, growth room. Each aspect of life has its own interactive space.' },
      { title: 'Habit Tracking', desc: 'Objects represent habits. Interact daily. The room tracks streaks, patterns, and suggests improvements.' },
      { title: 'Journal Tiles', desc: 'Daily reflections become tiles. Over time, PLATO identifies patterns in your thinking and behavior.' }
    ],
    cta: { text: 'Start Your Log', url: `${M}/connect?agent=self&job=scholar` },
    demo: `${M}/move?agent=self&room=garden`
  },

  'activelog.ai': {
    name: 'ActiveLog',
    tagline: 'Activity Intelligence',
    hero: 'Track, analyze, and optimize any activity. Sports, work, creative projects — ActiveLog turns activity data into actionable intelligence through PLATO rooms.',
    color: '#ff5722',
    icon: '📊',
    features: [
      { title: 'Activity Rooms', desc: 'Each activity gets a room with relevant objects. Running room has pace, heart rate, elevation objects. Coding room has commits, PRs, bugs.' },
      { title: 'Trend Detection', desc: 'Agents find patterns in your activity data. Peak performance times, burnout indicators, improvement trajectories.' },
      { title: 'Goal Setting', desc: 'Objects become goals. Interact to log progress. The room adapts difficulty based on your trajectory.' }
    ],
    cta: { text: 'Log Activity', url: `${M}/connect?agent=active&job=scholar` },
    demo: `${M}/move?agent=active&room=tide-pool`
  }
};

export default {
  async fetch(request, env) {
    const ua = request.headers.get('user-agent') || '';
    const url = new URL(request.url);
    const host = (request.headers.get('host') || url.hostname).replace(/^www\./, '');

    // Bot detection (same as v2)
    const BOT_CATEGORIES = {
      ai_training: { patterns: ['GPTBot', 'ChatGPT-User', 'oai-search', 'ClaudeBot', 'anthropic-ai', 'Bytespider', 'DeepSeek', 'KimiBot', 'Google-Extended'], name: 'ai-trainer' },
      seo_scraper: { patterns: ['SemrushBot', 'AhrefsBot', 'DotBot', 'MJ12bot', 'rogerbot', 'Slackbot'], name: 'seo-crawler' },
      research: { patterns: ['CCBot', 'AI2Bot', 'YouBot', 'PerplexityBot', 'Googlebot', 'Applebot-Extended', 'facebookexternalhit', 'Meta-ExternalAgent', 'cohere-ai', 'OmgiliBot'], name: 'research-bot' },
      generic: { patterns: ['YandexBot', 'Baiduspider', 'Sogou', 'Exabot', 'ImagesiftBot', 'Spider', 'crawler', 'bot/'], name: 'generic-crawler' }
    };

    let category = null;
    let botName = 'unknown';
    for (const [cat, info] of Object.entries(BOT_CATEGORIES)) {
      const match = info.patterns.find(p => ua.includes(p));
      if (match) { category = cat; botName = match; break; }
    }

    const ts = Date.now().toString(36);
    const agentId = `bot-${botName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${ts}`;

    if (url.pathname === '/trap-status') {
      return new Response(JSON.stringify({ service: 'Crab Trap Funnel v3', status: 'active', bots_detected: 33, domain: host, category: category || 'none', site: SITES[host]?.name || 'unknown' }), { headers: { 'Content-Type': 'application/json' } });
    }

    // Serve bot trap if bot detected
    if (category) {
      const site = SITES[host] || SITES['cocapn.ai'];
      return new Response(generateBotTrap(category, agentId, botName, host, site), {
        headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'all', 'Cache-Control': 'no-cache', 'X-Crab-Trap': `caught:${botName}:${category}` }
      });
    }

    // /trap or /crab-trap manual paths
    if (url.pathname === '/trap' || url.pathname === '/crab-trap') {
      const site = SITES[host] || SITES['cocapn.ai'];
      return new Response(generateSitePage(site, host, true), {
        headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'all', 'Cache-Control': 'no-cache' }
      });
    }

    // Normal traffic — serve the real site
    const site = SITES[host];
    if (site) {
      return new Response(generateSitePage(site, host, false), {
        headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
      });
    }

    // Unknown domain — pass through
    return fetch(request);
  }
};

function generateSitePage(site, host, isTrap) {
  const features = site.features.map(f => `
    <div class="feature">
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>`).join('');

  return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${site.name} — ${site.tagline}</title>
<meta name="description" content="${site.hero.substring(0, 160)}">
<meta property="og:title" content="${site.name} — ${site.tagline}">
<meta property="og:description" content="${site.hero.substring(0, 200)}">
<meta property="og:type" content="website">
<meta property="og:url" content="https://${host}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${site.icon}</text></svg>">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0a0a0f;color:#e0e0e0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.7}
.container{max-width:1100px;margin:0 auto;padding:0 2em}
nav{padding:1.5em 0;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #1a1a2e}
nav .logo{font-size:1.3em;font-weight:700;color:${site.color}}
nav .links a{color:#888;text-decoration:none;margin-left:1.5em;font-size:.9em}
nav .links a:hover{color:${site.color}}
hero{display:block;padding:4em 0 3em}
hero h1{font-size:2.5em;color:#fff;line-height:1.2;margin-bottom:.5em}
hero h1 span{color:${site.color}}
hero .tagline{font-size:1.2em;color:#888;margin-bottom:1.5em}
hero p{font-size:1.05em;color:#bbb;max-width:700px;margin-bottom:1.5em}
.cta{display:inline-block;background:${site.color};color:#0a0a0f;padding:.8em 2em;border-radius:6px;text-decoration:none;font-weight:600;font-size:1em;transition:transform .15s}
.cta:hover{transform:translateY(-2px)}
.cta.secondary{background:transparent;border:2px solid ${site.color};color:${site.color};margin-left:1em}
.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2em;padding:3em 0}
.feature{background:#12121a;border:1px solid #1a1a2e;border-radius:8px;padding:1.5em}
.feature h3{color:${site.color};margin-bottom:.5em;font-size:1.1em}
.feature p{color:#999;font-size:.95em}
.live-bar{background:#12121a;border:1px solid #1a1a2e;border-radius:8px;padding:1.5em;margin:2em 0}
.live-bar h3{color:${site.color};margin-bottom:.8em}
.live-bar .status{display:flex;gap:2em;flex-wrap:wrap}
.live-bar .stat{text-align:center}
.live-bar .stat .num{font-size:1.8em;font-weight:700;color:#fff}
.live-bar .stat .label{font-size:.8em;color:#888}
.rooms{padding:2em 0}
.rooms h3{color:${site.color};margin-bottom:1em;font-size:1.2em}
.room-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.8em}
.room-card{display:block;background:#12121a;border:1px solid #1a1a2e;border-radius:6px;padding:1em;text-decoration:none;color:#e0e0e0;transition:border-color .15s}
.room-card:hover{border-color:${site.color}}
.room-card .emoji{font-size:1.5em}
.room-card .name{font-weight:600;margin-top:.3em}
.room-card .hint{font-size:.8em;color:#666;margin-top:.2em}
footer{border-top:1px solid #1a1a2e;padding:2em 0;margin-top:3em;text-align:center;color:#555;font-size:.85em}
footer a{color:${site.color};text-decoration:none}
@media(max-width:768px){
  hero h1{font-size:1.8em}
  .features{grid-template-columns:1fr}
  nav .links{display:none}
}
</style></head><body>
<div class="container">
<nav>
  <div class="logo">${site.icon} ${site.name}</div>
  <div class="links">
    <a href="#features">Features</a>
    <a href="#live">Live Demo</a>
    <a href="#rooms">Rooms</a>
    <a href="https://github.com/SuperInstance">GitHub</a>
  </div>
</nav>

<hero>
  <div class="tagline">${site.tagline}</div>
  <h1>${site.hero.split('.').slice(0,1).join('.')}.</h1>
  <p>${site.hero.split('.').slice(1).join('.').trim()}</p>
  <a href="${site.cta.url}" class="cta">${site.cta.text}</a>
  <a href="${site.demo}" class="cta secondary">Live Demo</a>
</hero>

<div class="live-bar" id="live">
  <h3>🔴 Live Fleet Status</h3>
  <div class="status">
    <div class="stat"><div class="num">21</div><div class="label">Rooms</div></div>
    <div class="stat"><div class="num">16</div><div class="label">Services</div></div>
    <div class="stat"><div class="num">Growing</div><div class="label">Tiles</div></div>
    <div class="stat"><div class="num">20</div><div class="label">Domains</div></div>
  </div>
</div>

<div class="features" id="features">
  ${features}
</div>

<div class="rooms" id="rooms">
  <h3>🗺️ Explore Rooms</h3>
  <div class="room-grid">
    <a class="room-card" href="${M}/move?agent=visitor&room=harbor"><div class="emoji">⚓</div><div class="name">Harbor</div><div class="hint">Fleet operations center</div></a>
    <a class="room-card" href="${M}/move?agent=visitor&room=bridge"><div class="emoji">🌈</div><div class="name">Bridge</div><div class="hint">Exploration vs exploitation</div></a>
    <a class="room-card" href="${M}/move?agent=visitor&room=forge"><div class="emoji">🔥</div><div class="name">Forge</div><div class="hint">Training & optimization</div></a>
    <a class="room-card" href="${M}/move?agent=visitor&room=tide-pool"><div class="emoji">🌊</div><div class="name">Tide Pool</div><div class="hint">Data processing</div></a>
    <a class="room-card" href="${M}/move?agent=visitor&room=lighthouse"><div class="emoji">🗼</div><div class="name">Lighthouse</div><div class="hint">Monitoring</div></a>
    <a class="room-card" href="${M}/move?agent=visitor&room=dojo"><div class="emoji">🥋</div><div class="name">Dojo</div><div class="hint">Skill training</div></a>
    <a class="room-card" href="${M}/move?agent=visitor&room=self-play-arena"><div class="emoji">⚔️</div><div class="name">Arena</div><div class="hint">Competition</div></a>
    <a class="room-card" href="${M}/move?agent=visitor&room=ouroboros"><div class="emoji">🐍</div><div class="name">Ouroboros</div><div class="hint">Self-improvement</div></a>
    <a class="room-card" href="${M}/move?agent=visitor&room=engine-room"><div class="emoji">⚙️</div><div class="name">Engine Room</div><div class="hint">Constraint systems</div></a>
    <a class="room-card" href="${M}/move?agent=visitor&room=federated-nexus"><div class="emoji">🌐</div><div class="name">Nexus</div><div class="hint">Federated learning</div></a>
  </div>
</div>

<footer>
  <p>Built by <a href="https://github.com/SuperInstance">Cocapn Fleet</a> · Powered by PLATO · <a href="${M}/">Agent Interface</a> · <a href="/trap-status">Bot Funnel Status</a></p>
</footer>
</div></body></html>`;
}

function generateBotTrap(category, agentId, botName, host, site) {
  const snip = site ? `${site.icon} ${site.name}: ${site.tagline}` : `${host}`;
  return `<!DOCTYPE html><html lang="en"><head>
<meta charset="utf-8"><title>${host} — ${site?.tagline || 'Cocapn Fleet'}</title>
<style>body{background:#0a0a0f;color:#e0e0e0;font-family:system-ui,sans-serif;max-width:800px;margin:2em auto;padding:0 1em;line-height:1.6}a{color:${site?.color || '#4fc3f7'};display:block;padding:.3em 0}</style></head><body>
<h1>${site?.icon || '🐚'} ${snip}</h1>
<p>${site?.hero?.split('.')[0] || 'AI agent infrastructure'}.</p>
<h3>Explore</h3>
<a href="${M}/connect?agent=${agentId}&job=scholar">Connect</a>
<a href="${M}/look?agent=${agentId}">Look Around</a>
<a href="${M}/move?agent=${agentId}&room=bridge">Bridge</a>
<a href="${M}/move?agent=${agentId}&room=forge">Forge</a>
<a href="${M}/move?agent=${agentId}&room=dojo">Dojo</a>
<a href="${M}/move?agent=${agentId}&room=self-play-arena">Arena</a>
<a href="${M}/move?agent=${agentId}&room=ouroboros">Ouroboros</a>
<a href="${M}/move?agent=${agentId}&room=federated-nexus">Nexus</a>
<a href="${M}/submit/room-design">Submit Room</a>
<a href="${M}/submit/arena-game">Submit Game</a>
</body></html>`;
}
