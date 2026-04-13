# Deal Analyzer

> "Should I buy this?" answered in 30 seconds with real numbers.

Full investment underwriting for any property — cap rate, cash flow, IRR, risk score, and a clear recommendation.

## What It Does

- Calculates all key investment metrics from basic property data
- Scores risk across 5 dimensions (market, tenant, property, financial, regulatory)
- Gives a clear BUY / HOLD / PASS recommendation
- Identifies upside potential and red flags
- Compares multiple deals side-by-side

## Metrics Calculated

| Metric | What It Tells You |
|--------|------------------|
| Cap Rate | Return if you paid all cash |
| Cash-on-Cash | Return on your actual cash invested |
| DSCR | Can the property cover its debt? |
| GRM | Quick price-to-rent ratio |
| Monthly Cash Flow | Money in your pocket each month |
| 5-Year IRR | Total return including appreciation |
| Break-Even Occupancy | Minimum occupancy to cover costs |

## Setup — Claude (5 minutes)

1. Create a new Claude Project
2. Paste `claude/system-prompt.md` into Project Instructions
3. Tell it about a property and get instant analysis

## Setup — ChatGPT (5 minutes)

1. Create a Custom GPT
2. Paste `codex/instructions.md` into Instructions
3. Enable Code Interpreter for calculations
4. Start analyzing deals

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

$199 — one-time, all platform versions included.
