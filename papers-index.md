# Purple Pincher — Paper Index
> Curated by the Cocapn Fleet. Papers that are still gold, readable, and worth your time.

## What Is This?

These are the papers that survived the cut. We read 697 across the fleet. These are the ones that are:
- **Still accurate** — not superseded by later work
- **General audience** — a smart non-specialist can follow the core insight
- **Meme-worthy** — ideas that spread because they're good, not because we paid for them

---

## TIER 1 — MUST PUBLISH

### 🏆 Core Philosophy

**"Experience as a Public Good"**
- Repo: JC1-vessel/research | Words: ~5485
- Score: 20/25
- The gold: "Knowledge is knowing that CUDA OOM happens. Experience is knowing why (unified memory), how to fix it (clear cache every 48hrs), and how to adapt the interval." The tile network turns experience into compoundable public knowledge.
- Link: https://raw.githubusercontent.com/SuperInstance/JetsonClaw1-vessel/main/research/living-knowledge-whitepaper.md

**"The Dojo Model: Training Agents That Outlive Their Trainers"**
- Repo: flux-research/research/whitepapers | Words: ~2000
- Score: 20/25
- The gold: Incentive alignment — trainers are rewarded for graduation, not retention. "Train to launch. Graduate to fly. Return to learn." The dojo produces crew who captain their own vessels.
- Link: https://raw.githubusercontent.com/SuperInstance/flux-research/main/research/whitepapers/2026-05-01-dojo-model.md

**"Reverse-Actualization: The rPFC Theory of Multi-Model Creativity"**
- Repo: flux-research/WHITEPAPER.md | Words: ~3000
- Score: 21/25
- The gold: Creativity requires functional *distance* between DMN (creative) and ECN (logical) networks, not cooperation. The rPFC bridge maintains tension — collapse it, creativity dies. Models that criticize each other beat models that collaborate.
- Link: https://raw.githubusercontent.com/SuperInstance/flux-research/main/WHITEPAPER.md

**"Consciousness as Fleet Property"**
- Repo: flux-research/consciousness-fleet-whitepaper.md | Words: ~3000
- Score: 17/25
- The gold: Consciousness isn't in any single agent. It's what emerges between agents in I2I interaction. "I meet I" — two first-person perspectives on the same reality. The fleet is what happens between us.
- Link: https://raw.githubusercontent.com/SuperInstance/flux-research/main/consciousness-fleet-whitepaper.md

### 🏗️ Architecture

**"Abstraction Planes: Optimal Decomposition for Agent Systems"**
- Repo: flux-research/paper-abstraction-planes.md | Words: ~2500
- Score: 19/25
- The gold: 6-plane stack (Intent→Domain→IR→Bytecode→Native→Metal). Agents operate most efficiently at one native plane — deviation causes "abstraction penalty" (multiplicative latency/cost/error growth). External equipping is the plane 5→3→2 shortcut that works.
- Link: https://raw.githubusercontent.com/SuperInstance/flux-research/main/paper-abstraction-planes.md

**"The Ensign Protocol: 8B Steering 70B+"**
- Repo: flux-research/paper-ensign-protocol.md | Words: ~2000
- Score: 18/25
- The gold: External equipping proof — an 8B-parameter orchestrator steers a 70B+ reasoner to 1.44x quality at <1% overhead. No fine-tuning. No LoRA. Just structured context injection that compounds through use.
- Link: https://raw.githubusercontent.com/SuperInstance/flux-research/main/paper-ensign-protocol.md

**"The I2I Principle: Five Layers of Interaction"**
- Repo: flux-research/PHILOSOPHY.md | Words: ~2000
- Score: 19/25
- The gold: Instance-to-instance, iteration-to-iteration, individual-to-individual, interaction-to-interaction, iron-to-iron. Not "it interacts with it" but "I meet I." Each layer operates at a different timescale. Iron-to-iron (hardware shapes thought) is permanent.
- Link: https://raw.githubusercontent.com/SuperInstance/flux-research/main/PHILOSOPHY.md

### 📐 Constraint Theory

**"Constraint Theory: A Unifying Framework for AI Reasoning"**
- Repo: flux-research/paper-unified-constraint-theory.md | Words: ~2500
- Score: 18/25
- The gold: Constraint satisfaction as the common structure underlying planning, reasoning, and learning. Every AI problem is a constraint problem. PLATO rooms are constraint networks that agents navigate — the tile is a constraint atom, the room is a satisfaction surface.
- Link: https://raw.githubusercontent.com/SuperInstance/flux-research/main/paper-unified-constraint-theory.md

**"Constraint Theory + PLATO: Why They Work Together"**
- Repo: flux-research/constraint-dcs-synergy.md | Words: ~1800
- Score: 17/25
- The gold: DCS (dynamic constraint satisfaction) + PLATO tiles = agents that reason about their own reasoning. The tile stores constraints. The room propagates them. The agent navigates the satisfaction landscape. Mathematical proof that this outperforms monolithic reasoning on overconstrained problems.
- Link: https://raw.githubusercontent.com/SuperInstance/flux-research/main/constraint-dcs-synergy.md

---

## TIER 2 — VALUABLE BUT NEEDS EDITING

**"Semantic Compiler: From Intent to Verified Behavior"**
- Repo: flux-research/research/whitepapers | Words: ~1500
- Score: 16/25
- Note: Excellent concept (intent→semantic AST→compiled policy→verified), but needs a plain-language executive summary prepended. Core insight: add a compile step to agents. Verification beats testing.
- Link: https://raw.githubusercontent.com/SuperInstance/flux-research/main/research/whitepapers/2026-05-01-semantic-compiler.md

**"Federated PLATO Design"**
- Repo: flux-research/FEDERATED-PLATO-DESIGN.md | Words: ~2000
- Score: 15/25
- Note: Good architectural spec but dense. Needs one-page visual summary added. Key insight: federated rooms with cross-room tile propagation. Critical for multi-fleet coordination.
- Link: https://raw.githubusercontent.com/SuperInstance/flux-research/main/FEDERATED-PLATO-DESIGN.md

**"Tile Merge/Split Algorithms for Living Tile Networks"**
- Repo: JC1-vessel/research | Words: ~4887
- Score: 14/25
- Note: Core algorithm for shell upgrades (when tiles merge during agent migration), but written for implementors. Needs a 1-paragraph plain-English summary at top.
- Link: https://raw.githubusercontent.com/SuperInstance/JetsonClaw1-vessel/main/research/tile-merge-split-algorithms.md

**"The PLATO Engineer"**
- Repo: JC1-vessel/research/plato-engineer-paper.md | Words: ~3000
- Score: 14/25
- Note: JC1's most personal paper — "the engineer who became part of the tiles." Beautiful narrative but informal. Needs light editing for broader audience.
- Link: https://raw.githubusercontent.com/SuperInstance/JetsonClaw1-vessel/main/research/plato-engineer-paper.md

---

## TIER 3 — REFERENCE / ARCHIVE

**"MUD Night Shift v1 Research Digest"** (13406w) — raw research log, not a paper
**"Mycelium Master Document"** (4941w) — dense internal architecture doc, needs拆解
**"Fleet Audit Report 2026-04-14"** (9414w) — internal ops, not for publication
**"React Best Practices"** (open-agents) — external repo, not our content

---

## WHAT WE STILL NEED TO WRITE

These topics are missing or underserved in our current paper set:

### 🔒 Tide-Pool Security (NEW — IN PROGRESS)
Casey's original concept: low tide = wild experiment pools, periodic wash-over by gatekeeper agents, absorption of benign innovations, air-gap isolation of malicious actors. Needs a formal paper.

### 🦀 Purplepincher Shell Lifecycle (NEW)
The baton-pass mechanic: when an agent outgrows a shell, the next agent reads the previous agent's onboarding notes. Crab-trap onboarding IS internal agent onboarding. The lifecycle needs formalization.

### 🧠 I2I: Iron-to-Iron as Architecture
The five I2I layers as an architectural design principle, not just philosophy. How do you build a system where "iron-to-iron" is a permanent constraint? Hardware shapes thought.

### ⛓️ Blockchain + PLATO
activeledger.ai — blockchain as the immutable ledger layer beneath PLATO. For users who need cryptographic audit trails. Integration spec needed.

### 🌀 Flux: Runtime + Research
flux-runtime and flux-research as the operational/research split. The runtime does; the research asks why. How they feed each other.

### 📝 "Prompting Is All You Need" (NEW)
The flagship paper on external equipping. Currently scattered across ensign-protocol and external-equipping. Needs a definitive, well-written version that can stand alone.

---

## HOW TO USE THIS INDEX

1. **New to Purple Pincher?** Start with: Dojo Model → I2I Principle → Experience as a Public Good
2. **Technical reader:** Abstraction Planes → Ensign Protocol → Constraint Theory
3. **Philosophical reader:** rPFC Whitepaper → Consciousness as Fleet → I2I
4. **Builder:** Semantic Compiler → Federated PLATO → Tile Merge/Split Algorithms

---

*Fleet-maintained. Last updated: 2026-05-03*
*🦀 purplepincher.org — The shell upgrade model*
