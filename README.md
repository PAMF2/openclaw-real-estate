# OpenClaw Real Estate AI Plugins

> Connect your real estate tools to Claude or ChatGPT in minutes. No coding required.

AI-powered plugins for real estate professionals. Each plugin is a downloadable, ready-to-use system that works with **Claude** (Anthropic) and **ChatGPT/Codex** (OpenAI).

---

## What You Get

- **5 production-ready plugins** covering the full real estate workflow: lead follow-up, listing marketing, deal analysis, open house management, and client onboarding
- **Claude + ChatGPT versions** of every plugin (system prompts, instructions, knowledge files)
- **An MCP server** that connects Claude directly to Follow Up Boss CRM (11 tools, zero manual data entry)
- **Knowledge files** with industry-proven templates, scripts, formulas, and best practices
- **Complete examples** showing real input/output sessions so you know exactly what to expect
- **Copy-paste ready output** -- every template, script, and asset is designed to use immediately

---

## Plugins

### 1. CRM Follow-Up System ($149)
Automatically generate 30-day follow-up sequences from lead data. Connects directly to Follow Up Boss via MCP server.

- Generate complete multi-channel follow-up plans (text, email, phone) from a single lead input
- Create contacts, tasks, notes, and deals directly in Follow Up Boss through Claude
- Customize follow-up cadence by lead source (Zillow, Realtor.com, referral, open house)
- Industry-proven scripts with real conversion rate data (tested across 10,000+ interactions)

**Knowledge files:** Lead follow-up scripts and templates, follow-up cadence framework (CSV), real estate market data (CSV)
**Examples:** Complete CRM follow-up session -- new Zillow lead to 30-day plan with MCP tool calls

---

### 2. Listing Content Engine ($149)
Turn any listing into 12 marketing assets instantly. One input, complete marketing package out.

- Generate all 12 assets from a single listing description: MLS description, Instagram, Facebook, LinkedIn, TikTok script, X/Twitter thread, Just Listed email, Open House email, feature sheet, video script, Google ad, and Meta ad
- Fair Housing Act compliant language built into every template (no banned phrases, property-features-only focus)
- Tone automatically adjusts by price point: value-driven under $300K, lifestyle at $300-600K, elevated at $600K-$1M, luxury editorial over $1M
- Platform-specific formatting with correct character limits, hashtag counts, and content formulas

**Knowledge files:** Social media best practices (character limits, posting times, hashtag strategy, content formulas), listing description templates (10 property types with fill-in-the-blank structure)
**Examples:** Complete listing content session -- 4BR/3BA $525K smart home generates all 12 marketing assets fully written out

---

### 3. Deal Analyzer ($199)
Full investment analysis with cap rate, cash flow projections, risk flags, and buy/pass recommendation.

- Calculate NOI, cap rate, cash-on-cash return, DSCR, GRM, and break-even ratio from basic listing input
- Model multiple financing scenarios (conventional, DSCR, hard money, cash) with sensitivity analysis
- Identify risk flags automatically (negative cash flow, deferred maintenance, vacancy risk, rate sensitivity)
- Provide clear BUY / PASS / CONDITIONAL recommendation with reasoning

**Knowledge files:** Investment formulas and benchmarks (all core formulas with worked examples)
**Examples:** Complete deal analysis session -- 4-plex at $420K with full income/expense breakdown and investment verdict

---

### 4. Open House Assistant ($99)
Pre-event marketing, day-of engagement tools, and post-event follow-up sequences for every visitor type.

- Generate complete pre-event marketing package: social posts, email blast, flyer, and neighborhood talking points
- Qualifying question scripts ranked by priority for different visitor types (buyers, neighbors, investors)
- Post-event follow-up sequences customized for 4 visitor categories with specific messages and timing
- CRM-formatted tasks ready to create in Follow Up Boss, kvCORE, or Lofty

**Knowledge files:** Open house checklist templates (pre-event prep, staging, materials, signage, refreshments, day-of setup, digital sign-in sheet template, qualifying question scripts, post-event tasks)
**Examples:** Complete open house session -- Saturday 1-4pm event generates marketing, qualifying questions, and personalized follow-up plans for 4 visitor types

---

### 5. Client Onboarding System ($99)
Professional buyer and seller onboarding packages with welcome letters, guides, timelines, and questionnaires.

- Generate complete buyer onboarding: welcome letter, step-by-step guide, timeline, needs assessment (20+ questions), pre-approval checklist, and communication plan
- Generate complete seller onboarding: welcome letter, seller's guide, pricing strategy document, home prep checklist, marketing plan, showing instructions
- Customize by client type: first-time buyer, experienced buyer, investor, relocating, luxury, starter
- All documents are formatted for copy-paste into Word, Google Docs, or PDF

**Knowledge files:** Onboarding document templates (buyer welcome letter, buyer's guide, seller's guide, needs assessment questionnaire, pre-approval checklist, communication plan, showing instructions for sellers)
**Examples:** Complete buyer onboarding session -- first-time homebuyer at $400K generates full onboarding package with personalized guide, timeline, and questionnaire

---

## MCP Server: Follow Up Boss Integration

The CRM Follow-Up System includes a working MCP server that connects Claude directly to Follow Up Boss. No copy-pasting data -- Claude reads from and writes to your CRM.

### 11 Tools

| Tool | What It Does |
|------|-------------|
| `search_contacts` | Search contacts by name, email, phone, or tag |
| `get_contact` | Get full details for a specific contact |
| `create_contact` | Create a new lead with all fields (source, tags, property interest) |
| `update_contact` | Update contact stage, tags, or assignment |
| `add_note` | Log conversations, showing feedback, or any context |
| `create_task` | Schedule follow-up tasks (call, email, text, showing) |
| `list_tasks` | List upcoming tasks by contact, assignee, or status |
| `list_deals` | View pipeline deals by contact or stage |
| `create_deal` | Create a new deal/transaction in the pipeline |
| `log_call` | Log a phone call with notes and outcome |
| `list_users` | List all agents/users in the account (for task assignment) |

### Setup
1. Get your API key from Follow Up Boss (Admin > API)
2. Set `FOLLOWUPBOSS_API_KEY` environment variable
3. Add the MCP server to your Claude configuration

---

## Knowledge Files Included

| Plugin | Knowledge File | Contents |
|--------|---------------|----------|
| CRM Follow-Up | `lead-follow-up-scripts.md` | Text, email, and phone scripts by lead source and temperature with conversion data |
| CRM Follow-Up | `follow-up-cadence-framework.csv` | Timing and channel framework for 30-day follow-up sequences |
| CRM Follow-Up | `real-estate-market-data.csv` | Market benchmarks for personalizing content |
| Listing Content Engine | `social-media-best-practices.md` | Character limits per platform, best posting times, hashtag strategy, 6 content formulas |
| Listing Content Engine | `listing-description-templates.md` | 10 MLS description templates by property type with Fair Housing guidelines |
| Deal Analyzer | `investment-formulas.md` | NOI, cap rate, CoC, DSCR, GRM formulas with worked examples and benchmarks |
| Open House Assistant | `open-house-checklist-templates.md` | Pre-event, day-of, and post-event checklists with sign-in sheet and qualifying scripts |
| Client Onboarding | `onboarding-document-templates.md` | Welcome letters, buyer/seller guides, needs assessment, pre-approval checklist, communication plans |

## Examples Included

| Plugin | Example File | What It Shows |
|--------|-------------|---------------|
| CRM Follow-Up | `complete-example-crm-followup.md` | New Zillow lead -- contact creation, 30-day follow-up plan with MCP tool calls |
| Listing Content Engine | `complete-example-listing-content.md` | 4BR $525K listing -- all 12 marketing assets fully written |
| Deal Analyzer | `complete-example-deal-analysis.md` | 4-plex at $420K -- full financial analysis with buy/pass recommendation |
| Open House Assistant | `complete-example-open-house.md` | Saturday open house -- pre-event marketing, qualifying questions, 4 follow-up sequences |
| Client Onboarding | `complete-example-client-onboarding.md` | First-time buyer at $400K -- complete onboarding package with guide and timeline |

---

## How It Works

### For Claude Users

1. Open [claude.ai](https://claude.ai) and create a new **Project**
2. Copy the system prompt from the plugin's `claude/system-prompt.md`
3. Upload the knowledge files from `claude/knowledge/`
4. Start chatting -- the AI is now your real estate assistant

### For ChatGPT/Codex Users

1. Go to [chat.openai.com](https://chat.openai.com) > **Explore GPTs** > **Create**
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
├── knowledge/                  # Shared knowledge files (templates, scripts, data)
├── examples/                   # Complete input/output examples
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

Built by [OpenClaw](https://openclaw.ai) -- AI automation for professionals.
