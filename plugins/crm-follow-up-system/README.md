# CRM Follow-Up System

> Turn any lead into a 30-day follow-up system in 10 seconds.

Replaces 3-5 hours/week of manual follow-up work.

## What It Does

- Analyzes any lead (name, source, interests, timeline, budget)
- Determines lead temperature (hot/warm/cold)
- Generates a complete 30-day sequence with exact copy
- Covers text, email, call scripts, and voicemail drops
- Formats for your CRM (Follow Up Boss, kvCORE, Lofty, HubSpot)

## Supported CRMs

| CRM | Format |
|-----|--------|
| Follow Up Boss | Action Plans with step types |
| kvCORE / BoldTrail | Smart Campaigns with triggers |
| Lofty (Chime) | AI Automation workflows |
| HubSpot | Sequences with enrollment criteria |
| Other | Universal format (copy-paste) |

## Setup — Claude (5 minutes)

1. Go to [claude.ai](https://claude.ai) → **Projects** → **New Project**
2. Name it "CRM Follow-Up System"
3. Click **Edit Project Instructions**
4. Copy and paste everything from `claude/system-prompt.md`
5. Upload files from `claude/knowledge/` (if any)
6. Start a conversation: "I have a new lead..."

## Setup — ChatGPT (5 minutes)

1. Go to [chat.openai.com](https://chat.openai.com) → **Explore GPTs** → **Create**
2. Set the name and description from `codex/config.json`
3. Paste the instructions from `codex/instructions.md`
4. Add the conversation starters from `codex/config.json`
5. Upload files from `codex/knowledge/` (if any)
6. Save and start using

## Example

**Input:**
> New lead: Sarah Chen, Zillow, looking for 3BR in Westside under $650K, pre-approved, 2-3 month timeline

**Output:**
- 30-day sequence with 22 touchpoints
- Mix of texts, emails, and calls
- Personalized to Sarah's interests
- Conditional branches (if she responds vs. doesn't)
- CRM-ready format

See `examples/` for full sample outputs.

## Platforms

### Claude Code
Copy `claude/system-prompt.md` into your Claude project instructions.
Add the MCP server to `.mcp.json` for live CRM/software integration.

### ChatGPT / Codex
Create a Custom GPT using `codex/instructions.md` as the system prompt.
Upload knowledge files from the `knowledge/` folder.

### Perplexity
Use `perplexity/system-prompt.md` as your Perplexity Space instructions.

### Manus
Use `manus/instructions.md` as your Manus agent instructions.

## Price

$149 — one-time purchase, lifetime access, all platform versions included.
