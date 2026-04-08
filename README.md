# OpenClaw Real Estate AI Plugins

> Connect your real estate tools to Claude or ChatGPT in minutes. No coding required.

AI-powered plugins for real estate professionals. Each plugin is a downloadable, ready-to-use system that works with **Claude** (Anthropic) and **ChatGPT/Codex** (OpenAI).

---

## Plugins

| Plugin | What It Does | Works With | Price |
|--------|-------------|------------|-------|
| [CRM Follow-Up System](plugins/crm-follow-up-system/) | Auto-generate 30-day follow-up sequences from lead data | Follow Up Boss, kvCORE, Lofty | $149 |
| [Listing Content Engine](plugins/listing-content-engine/) | Turn any listing into 10+ marketing assets instantly | Any MLS, Zillow, Realtor.com | $149 |
| [Deal Analyzer](plugins/deal-analyzer/) | Full investment analysis — cap rate, cash flow, risk flags | Any listing data | $199 |
| [Open House Assistant](plugins/open-house-assistant/) | Pre/post open house workflows — prep, follow-up, feedback | Follow Up Boss, kvCORE | $99 |
| [Client Onboarding System](plugins/client-onboarding/) | Buyer/seller onboarding packets, timelines, checklists | Any CRM | $99 |

---

## How It Works

### For Claude Users

1. Open [claude.ai](https://claude.ai) and create a new **Project**
2. Copy the system prompt from the plugin's `claude/system-prompt.md`
3. Upload the knowledge files from `claude/knowledge/`
4. Start chatting — the AI is now your real estate assistant

### For ChatGPT/Codex Users

1. Go to [chat.openai.com](https://chat.openai.com) → **Explore GPTs** → **Create**
2. Paste the instructions from the plugin's `codex/instructions.md`
3. Upload the knowledge files from `codex/knowledge/`
4. Add the conversation starters from `codex/config.json`
5. Save and start using

### For Claude Code Users

```bash
# Install directly as a Claude Code plugin
claude plugin install openclaw-real-estate
```

---

## What's Inside Each Plugin

```
plugin-name/
├── claude/
│   ├── system-prompt.md        # Paste into Claude Project instructions
│   └── knowledge/              # Upload these files to your project
├── codex/
│   ├── instructions.md         # Paste into Custom GPT instructions
│   ├── config.json             # GPT name, description, conversation starters
│   └── knowledge/              # Upload these files to your GPT
├── examples/                   # 5-10 real output samples
├── SKILL.md                    # Claude Code skill (auto-invoked)
└── README.md                   # Setup guide with screenshots
```

---

## Target Software Integrations

| Software | Users | Our Plugins |
|----------|-------|-------------|
| **Follow Up Boss** | 100K-150K+ agents | CRM Follow-Up, Open House, Client Onboarding |
| **kvCORE / BoldTrail** | 400K-500K agents | CRM Follow-Up, Open House, Client Onboarding |
| **Lofty (Chime)** | 20K-40K agents | CRM Follow-Up, Client Onboarding |
| **Any MLS/Listing Source** | All agents | Listing Content Engine, Deal Analyzer |

---

## Who This Is For

- Real estate agents spending 5+ hours/week on follow-ups and admin
- Teams wanting consistent messaging across all agents
- Investors analyzing 10+ deals per week
- Brokerages looking to give agents an AI edge

---

## Pricing

| Tier | What You Get | Price |
|------|-------------|-------|
| Single Plugin | One plugin, both Claude + ChatGPT versions | $99-$199 |
| Agent Bundle | All 5 plugins | $499 |
| Pro Access | All plugins + updates + new drops | $49/month |

> **ROI**: One deal = $10K-$30K commission. If these plugins help close one extra deal, they pay for themselves 100x.

---

## Setup Time

Every plugin can be installed in **under 10 minutes**. No coding, no API keys, no technical skills needed.

---

## Support

- Setup guide included with every plugin
- Video walkthrough (Loom) included
- Email support: support@openclaw.ai

---

## License

Proprietary. Personal and team use only. Do not redistribute.

---

Built by [OpenClaw](https://openclaw.ai) — AI automation for professionals.
