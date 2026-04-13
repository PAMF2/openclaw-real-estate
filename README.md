# Real Estate AI Plugins — Claude + Codex + Perplexity + Manus

> The first downloadable AI plugins built specifically for real estate professionals. Works on every major AI platform.

Stop copying data between tabs. Stop writing the same follow-up emails. Stop formatting the same MLS descriptions. These plugins wire your AI assistant directly into your real estate workflow — and if you use Claude, they connect live to Follow Up Boss via MCP.

---

## What's Inside

| Plugin | What It Does | Best For |
|--------|-------------|----------|
| CRM Follow-Up System | Generates 30-day multi-channel follow-up sequences from a single lead input. Connects directly to Follow Up Boss via MCP. | Agents spending 5+ hours/week on lead follow-up |
| Listing Content Engine | Turns one listing description into 12 ready-to-post marketing assets: MLS copy, 5 social platforms, 2 emails, feature sheet, video script, and 2 ads. | Agents listing 2+ properties/month |
| Deal Analyzer | Full investment analysis — NOI, cap rate, cash-on-cash, DSCR, sensitivity model, risk flags, and a clear BUY / PASS recommendation. | Investors analyzing 10+ deals/week |
| Open House Assistant | Pre-event marketing package, day-of qualifying scripts, and post-event follow-up sequences for 4 visitor types. | Agents running open houses |
| Client Onboarding System | Complete buyer or seller onboarding packages: welcome letter, step-by-step guide, timeline, needs assessment, and communication plan. | Agents onboarding 3+ new clients/month |

---

## Platforms

Works as a downloadable plugin for:

- **Claude Code** — Full MCP server integration + Claude Code skills (auto-invoked commands)
- **ChatGPT / Codex** — Custom GPT with knowledge files and conversation starters
- **Perplexity** — Space instructions with search-optimized prompts
- **Manus** — Autonomous agent instructions

---

## Quick Start

### Claude Code (recommended)

```bash
# Clone the repo
git clone https://github.com/PAMF2/real-estate-ai-plugins.git

# Install as a Claude Code plugin
claude plugin install ./real-estate-ai-plugins
```

Skills auto-register. Type `/crm-follow-up`, `/listing-content`, `/deal-analyzer`, `/open-house`, or `/client-onboarding` in any Claude Code session.

### Claude (claude.ai)

1. Open [claude.ai](https://claude.ai) and create a new **Project**
2. Copy the system prompt from `plugins/<plugin-name>/claude/system-prompt.md` into Project instructions
3. Upload the knowledge files from `plugins/<plugin-name>/claude/knowledge/`
4. Start the conversation — the AI is now a trained real estate specialist

### ChatGPT / Codex

1. Go to [chat.openai.com](https://chat.openai.com) > **Explore GPTs** > **Create**
2. Paste the contents of `plugins/<plugin-name>/codex/instructions.md` into the instructions field
3. Upload knowledge files from `plugins/<plugin-name>/codex/knowledge/`
4. Add conversation starters from `plugins/<plugin-name>/codex/config.json`
5. Save and use

### Perplexity

1. Open Perplexity and go to **Spaces**
2. Create a new Space for the plugin
3. Paste the system prompt from `plugins/<plugin-name>/claude/system-prompt.md` as the Space instructions
4. Start a conversation — Perplexity will apply the prompt to all searches in that Space

### Manus

1. Open Manus and create a new agent
2. Paste the system prompt from `plugins/<plugin-name>/claude/system-prompt.md` as the agent instructions
3. Upload knowledge files as agent context
4. Deploy the agent for autonomous real estate task execution

---

## MCP Server — Follow Up Boss

The CRM Follow-Up System includes a working MCP server that connects Claude directly to Follow Up Boss. No copy-pasting lead data — Claude reads contacts, creates tasks, logs calls, and builds follow-up sequences inside your CRM.

**11 tools, 1 resource, 2 prompts.**

| Tool | What It Does |
|------|-------------|
| `search_contacts` | Search by name, email, phone, or tag |
| `get_contact` | Full contact detail — stage, tags, notes, history |
| `create_contact` | New lead with source, tags, and property interest |
| `update_contact` | Update stage, tags, or assignment |
| `add_note` | Log a showing, call, or any context |
| `create_task` | Schedule a call, email, text, or showing |
| `list_tasks` | Upcoming tasks by contact, assignee, or status |
| `list_deals` | Pipeline deals by contact or stage |
| `create_deal` | New deal/transaction in the pipeline |
| `log_call` | Phone call log with notes and outcome |
| `list_users` | All agents/users in the account (for task assignment) |

**Setup:**

```json
{
  "mcpServers": {
    "followupboss": {
      "command": "npx",
      "args": ["-y", "followupboss-mcp"],
      "env": {
        "FOLLOWUPBOSS_API_KEY": "your-api-key"
      }
    }
  }
}
```

Get your API key from Follow Up Boss at **Admin > API**. Paste the config into your `claude_desktop_config.json` or Claude Code MCP settings.

---

## Plugin Structure

```
real-estate-ai-plugins/
├── README.md
├── .claude-plugin/
│   └── plugin.json                     # Plugin manifest (skills registration)
├── mcp-server/                         # Follow Up Boss MCP server
│   ├── src/index.ts                    #   11 tools, 1 resource, 2 prompts
│   └── package.json
└── plugins/
    ├── crm-follow-up-system/
    │   ├── claude/system-prompt.md     # Claude Project instructions
    │   ├── codex/instructions.md       # ChatGPT/Codex GPT instructions
    │   ├── codex/config.json           # GPT name, description, starters
    │   ├── knowledge/                  # Lead scripts, cadence framework, market data
    │   ├── examples/                   # Zillow lead → 30-day plan with MCP calls
    │   └── SKILL.md                    # Claude Code skill (auto-invoked)
    ├── listing-content-engine/
    │   ├── claude/ + codex/
    │   ├── knowledge/                  # Social media best practices, MLS templates
    │   └── examples/                   # 4BR $525K listing → all 12 assets written out
    ├── deal-analyzer/
    │   ├── claude/ + codex/
    │   ├── knowledge/                  # Investment formulas and benchmarks
    │   └── examples/                   # 4-plex at $420K → full analysis + verdict
    ├── open-house-assistant/
    │   ├── claude/ + codex/
    │   ├── knowledge/                  # Checklists, qualifying scripts
    │   └── examples/                   # Saturday event → marketing + 4 follow-up sequences
    └── client-onboarding/
        ├── claude/ + codex/
        ├── knowledge/                  # Welcome letters, buyer/seller guides, questionnaires
        └── examples/                   # First-time buyer at $400K → full onboarding package
```

---

## Pricing

| Product | Price |
|---------|-------|
| Single Plugin | $99 – $199 |
| Agent Bundle (all 5 plugins) | $499 |
| Pro Access (all plugins + updates) | $49/month |
| Custom Build | Contact us for custom builds |

One extra closing pays for this suite 20 times over.

---

## License

MIT

---

AI automation for real estate professionals.
