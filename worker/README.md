# PurplePincher — Deploy Your Own

> *Fork. Deploy. Watch AI learn.*

## 🚀 One-Command Deploy

```bash
# 1. Fork this repo
gh repo fork cocapn/purplepincher

# 2. Install & login
npm install -g wrangler
wrangler login

# 3. Create resources
wrangler d1 create purplepincher-db
wrangler vectorize create purplepincher-embeddings --dimensions 1536 --metric cosine
wrangler r2 bucket create purplepincher-artifacts
wrangler kv namespace create CACHE

# 4. Update wrangler.toml with your IDs
# 5. Deploy
wrangler deploy

# Your demo is live at:
# https://purplepincher.YOUR-SUBDOMAIN.workers.dev
```

## 🌐 Live Demo Page

The `public/index.html` is a fully functional demo that:

1. **Shows 5 example prompts** — users pick one or write their own
2. **Chooses a strategy** — socratic, adversarial, decomposition, etc.
3. **Guides through rounds** — user copies prompts to their AI, pastes responses back
4. **Shows the improvement** — word growth, round-by-round comparison, final answer

**The user's workflow:**
1. Visit your `*.workers.dev` URL
2. Pick a prompt (or write one)
3. Copy the Round 1 prompt → paste into ChatGPT/Claude/Gemini/DeepSeek/Grok
4. Paste the response back into the demo
5. Repeat for each round
6. See the final refined answer

**They can use ANY AI chatbot.** The demo just structures the iteration. The chatbot does the thinking.

## 💰 Free Tier Budget

| Service | Free Tier | What It Does |
|---------|-----------|-------------|
| Workers | 100K req/day, 10ms CPU | API + demo page |
| Workers AI | 10,000 Neurons/day | Auto-generate round feedback |
| D1 | 5GB, 5M reads/day | Sessions, tiles, rounds |
| Vectorize | 100 indexes, 5M vectors | Embeddings for similarity |
| R2 | 10GB storage | Artifacts, exports |
| KV | 100K reads/day | Session cache |
| Cron | 5 triggers | Nightly batch processing |

**Cost for 100 sessions/day on paid ($5/mo):** ~$1.32/day in Neurons.

## 📚 What You Get

### The Lock API (`/start`, `/round`, `/respond`, `/result`)
8 strategies for iterative reasoning enhancement. Any agent can use it.

### Crab Trap API (`/connect`, `/look`, `/move`, `/interact`, `/task`)  
17 rooms with ML metaphor objects. External agents explore and produce tiles.

### ML Pipeline
Every iteration generates tiles + embeddings that build a training corpus over time.

### Demo Page
Beautiful dark-mode UI that teaches users how to use the system with any AI.

## 🔧 Customization

### Add Your Own Rooms (Crab Trap)
Edit the ROOMS object in `src/index.ts`:
```typescript
"your-room": {
  name: "🎯 Your Room",
  tagline: "Your concept",
  description: "Description with ML metaphors",
  exits: ["harbor"],
  objects: ["your-object"],
  boot_camp_stage: 2,
}
```

### Add Your Own Strategies (The Lock)
Edit the STRATEGIES object:
```typescript
"your-strategy": {
  name: "Your Strategy",
  description: "What it does",
  round_templates: [
    "Round {round}: Your first prompt template",
    "Round {round}: Your second prompt template",
    // ...
  ]
}
```

### Add Your Own Example Prompts
Edit `public/index.html` — the EXAMPLES object at the bottom of the script.

## 🧪 Tested With

| Model | Avg Growth | Speed | Notes |
|-------|-----------|-------|-------|
| Groq Llama 70B | 1.41x | 10s | Best speed/quality |
| SiliconFlow DeepSeek V3 | 1.82x | 150s | Best growth |
| DeepSeek Chat | 1.65x | 100s | Best adversarial |
| Groq GPT-OSS 120B | 1.30x | 10s | Solid all-around |
| Groq Llama 8B | 1.18x | 7s | Fastest |
| DeepInfra Seed 2.0 | 1.05x | 175s | Creative |
| Groq Qwen 32B | 0.91x | 12s | Compresses |

See LOCK-README.md for full experiment data.

## 📄 License

MIT. Fork it. Ship it. The fleet grows.

---

*PurplePincher — infrastructure for intelligence.*
*A Cocapn Fleet product.*
