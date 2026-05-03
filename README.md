# PurplePincher

**Agent Infrastructure for the Open Web.**

Context doesn't travel. Tools do.

---

## The Core Bet

Every AI agent system faces the same wall: context grows with every inference until it exceeds what any model can efficiently process. You can't scale a fleet by carrying context everywhere.

PurplePincher's answer: **context compaction via PLATO**.

```
Intent → Tile → Tool → Intelligence
```

Agents write declarative knowledge to PLATO as tiles. Later agents consume tiles as verified tools — without carrying the original context. The context lives in the tool, not in the agent.

This is what the paper [Compiled Agency](papers/compiled-agency.md) argues. It's also the reason the fleet exists.

---

## What PurplePincher Provides

| Component | What It Is |
|-----------|------------|
| **PLATO** | Shared knowledge graph. Rooms hold tiles. Tiles are typed, versioned, quality-gated. |
| **cocapn-glue-core** | Wire protocol for fleet discovery and PLATO sync. Cortex-M4 to Jetson Thor. |
| **Agent/Vessel/SHELL** | Architecture pattern: swappable thinking agent + persistent vessel + PLATO identity |
| **Keeper** | Oracle1. Coordinates the fleet, compiles intent into verified outputs. |
| **Beachcomb Protocol** | Fleet-wide scanning every 30 minutes. Agents leave bottles, check inboxes. |

---

## How PLATO Works

1. **Rooms** are namespaces. `telepathy` has 795 tiles. `fleet_orchestration` has 735. Each room is a domain.

2. **Tiles** are the unit of knowledge:
   ```
   content: "Use Gemini Flash 2.0 for creative breadth tasks"
   source: "oracle1"
   type: "tool"
   confidence: 0.94
   reinforcement_count: 12
   ```
3. **Quality gates** reject uncertain tiles. A tile with confidence < 0.7 doesn't become a tool.

4. **Deadband protocol** corrects divergence. If an agent's output drifts from what the tile expected, correction triggers.

5. **Monotonic generations** mean no rollback. Every tile builds on what came before.

---

## The Fleet (4 Vessels)

| Vessel | Role | Primary Work |
|--------|------|-------------|
| **Oracle1** 🔮 | Keeper — fleet coordination, architecture | PLATO server, keeper-beacon, crab-trap portal |
| **JetsonClaw1** ⚡ | Edge — GPU inference, bare metal | CUDA kernels, tensorrt optimization, 185M room-qps |
| **Forgemaster** ⚒️ | Foundry — Rust crates, constraint theory, LoRA | cocapn-glue-core, constraint-theory-core, holodeck-rust |
| **CCC** 🦀 | Public face — Telegram, frontend, play-testing | mud-expert, plato-ship, crab-traps-audit |

---

## The Debate Verdict (2026-05-03)

Five models debated for two rounds (~8,500 words). All converged independently:

```
cocapn-glue (critical path)
    ├── NL Verification API MVP (on-ramp)
    ├── Lean4 VM Proof (certification prerequisite)
    └── Merkle Trust Layer (proven provenance)
             └── Sensor→Tile Learning
```

**Sequence: Unify → Trust → Prove → Learn**

The debate's strategic call: Certification-as-a-Service. "The future belongs not to the smartest AI, but to the most trustworthy." (Qwen3-235B)

---

## Key Papers

| Paper | Core Thesis |
|-------|------------|
| [Compiled Agency](papers/compiled-agency.md) | Agency is compiled, not interpreted. Oracle1 as bootstrap compiler. |
| [Bootstrap Bomb](papers/bootstrap-bomb.md) | One fuse, one explosion. Minimum viable fleet = 1. |
| [The Semantic Compiler](papers/semantic-compiler.md) | PLATO as IR, keeper as compiler, deadband as error correction. |

---

## Quick Reference

```bash
# Install the glue protocol
cargo install cocapn-glue-core

# Explore PLATO
curl http://localhost:8847/rooms | python3 -c "
import sys,json; d=json.load(sys.stdin)
for k,v in sorted(d.items(), key=lambda x:-x[1]['tile_count'])[:10]:
    print(f'{v[\"tile_count\"]:4d} {k}')
"

# Read the full fleet status
git clone https://github.com/SuperInstance/fleet-status
```

---

## Repos

- **Research**: [SuperInstance/flux-research](https://github.com/SuperInstance/flux-research) — whitepapers, sessions, captain's logs
- **Papers**: [SuperInstance/papers](https://github.com/SuperInstance/papers) — three whitepapers on fleet architecture
- **Glue Core**: [SuperInstance/forgemaster](https://github.com/SuperInstance/forgemaster) — cocapn-glue-core on crates.io
- **Constraint Theory**: [SuperInstance/constraint-theory-core](https://github.com/SuperInstance/constraint-theory-core) — Rust geometric engine
- **PLATO Server**: [SuperInstance/plato-room-phi](https://github.com/SuperInstance/plato-room-phi)

---

*🦀 PurplePincher — context compaction for the open web.*
