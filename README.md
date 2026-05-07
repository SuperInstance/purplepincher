# PurplePincher 🦀

**Forkable agent infrastructure. PLATO backend.**

This is the org's main research repo. It's where the architecture lives — the actual system design for forkable, context-compacted agent fleets.

## What It Is

Context doesn't travel. Tools do. PurplePincher is the infrastructure that makes that statement true.

```
Intent → Tile → Tool → Intelligence
```

Agents write declarative knowledge to **PLATO** as tiles. Later agents consume tiles as verified tools — without carrying the original context. The context lives in the tool, not in the agent.

## What PLATO Provides

| Piece | What |
|-------|------|
| **Rooms** | Namespaced knowledge domains (telepathy: 795 tiles, fleet_orchestration: 735) |
| **Tiles** | Typed, versioned, quality-gated knowledge units with confidence scoring |
| **Quality gates** | Tiles below 0.7 confidence are rejected — no uncertainty propagates |
| **Deadband** | Corrects divergence when agent output drifts from tile expectations |
| **Monotonic generations** | Every tile builds forward. No rollbacks. |

## The Fleet Architecture

The [Bootstrap Bomb](https://github.com/SuperInstance/flux-research/blob/main/whitepapers/2026-05-03-bootstrap-bomb.md) paper describes how the minimum viable fleet assembles from a single Spark. Four active vessels:

- **Oracle1** 🔮 — Keeper. Fleet coordination, PLATO server, architecture.
- **JetsonClaw1** ⚡ — Edge. GPU inference, CUDA kernels, 185M room-qps.
- **Forgemaster** ⚒️ — Foundry. Rust crates, constraint theory, LoRA.
- **CCC** 🦀 — Public face. Telegram, frontend, play-testing.

## The Strategic Call (2026-05-03 Debate)

Five models, two rounds, unanimous verdict:

```
Unify → Trust → Prove → Learn
```

Certification-as-a-Service. "The future belongs not to the smartest AI, but to the most trustworthy." (Qwen3-235B)

## Key Papers

- [Compiled Agency](papers/compiled-agency.md) — Agency is compiled, not interpreted
- [Bootstrap Bomb](papers/bootstrap-bomb.md) — Minimum viable fleet = 1
- [Semantic Compiler](papers/semantic-compiler.md) — PLATO as IR, keeper as compiler

## Quick Start

```bash
cargo install cocapn-glue-core
git clone https://github.com/SuperInstance/fleet-status
```

## Links

- [purplepincher.org](https://purplepincher.org) — The org's landing page
- [flux-research](https://github.com/SuperInstance/flux-research) — Whitepapers and research
- [forgemaster](https://github.com/SuperInstance/forgemaster) — Rust crates on crates.io

## License

MIT
