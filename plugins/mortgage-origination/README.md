# Mortgage Origination Assistant

Full-cycle AI support for mortgage brokers and loan officers — from borrower intake to funding.

Analyzes borrower files, calculates qualification ratios, generates document checklists, drafts client updates, and prepares underwriting submission summaries. Works with any loan origination system and handles both Canadian and US residential mortgage files.

## What It Does

- Analyzes borrower financial position from income, debts, and asset data
- Calculates GDS/TDS ratios for Canadian files with OSFI stress test applied
- Calculates front-end and back-end DTI for US files (conventional and FHA)
- Identifies maximum qualifying purchase price and explains shortfalls
- Generates document request lists tailored to deal type and borrower profile
- Flags missing, expired, or soon-to-expire documents before submission
- Drafts professional client-facing status emails (conditional approval, document requests, etc.)
- Prepares structured underwriting submission notes for lender packages
- Drafts pre-approval letters for broker review and signature
- Produces internal team handoff summaries (broker to processor, broker to underwriter)

## Qualification Ratios Covered

| Ratio | Jurisdiction | Maximum |
|-------|-------------|---------|
| GDS (Gross Debt Service) | Canada | 39% |
| TDS (Total Debt Service) | Canada | 44% |
| Stress test qualifying rate | Canada | max(contract + 2%, OSFI floor) |
| Front-end DTI | United States | 28% conventional, 31% FHA |
| Back-end DTI | United States | 36-45% conventional, 43-57% FHA |

## Setup — Claude (5 minutes)

1. Create a new Claude Project
2. Paste `claude/system-prompt.md` into Project Instructions
3. Optionally upload `knowledge/document-checklist-mortgage.md` and `knowledge/qualification-formulas.md` as Project Knowledge files
4. Provide borrower file details and get instant analysis

## Setup — ChatGPT (5 minutes)

1. Create a Custom GPT
2. Paste `codex/instructions.md` into Instructions
3. Use `codex/config.json` for the GPT name, description, and conversation starters
4. Upload both knowledge files from the `knowledge/` folder
5. Enable Code Interpreter for ratio calculations

## Knowledge Files

| File | Contents |
|------|---------|
| `knowledge/document-checklist-mortgage.md` | Complete document requirements by borrower type and deal type, with expiry windows and priority order |
| `knowledge/qualification-formulas.md` | GDS, TDS, DTI formulas with worked examples, lender benchmarks, and payment reference tables |

## Platforms

### Claude
Paste `claude/system-prompt.md` into your Claude Project Instructions. Upload the two knowledge files as Project Knowledge for best results.

### ChatGPT / Codex
Create a Custom GPT using `codex/instructions.md` as the system prompt. Upload the knowledge files. Enable Code Interpreter for calculations. See `codex/config.json` for the recommended GPT configuration.

### Perplexity
Use `perplexity/system-prompt.md` as your Perplexity Space instructions. The Perplexity version includes source-citation guidance for regulatory and rate references.

### Manus
Use `manus/instructions.md` as your Manus agent instructions. The Manus version operates autonomously — it researches current rates, analyzes the file, and saves a complete origination package as structured files.

## Compatible Loan Origination Systems

This plugin is platform-agnostic. The qualification logic and document requirements apply across:

| Platform | Jurisdiction |
|----------|-------------|
| Finmo | Canada |
| Velocity (Newton Connectivity) | Canada |
| Filogix / Expert (Equifax) | Canada |
| Morweb | Canada |
| Encompass (ICE Mortgage Technology) | United States |
| Calyx Point | United States |
| BytePro | United States |
| SimpleNexus / nCino | United States |
| Mortgage Cadence | United States |

Tell the assistant which platform you use and it will adapt field names and submission format accordingly.

## Example Use Cases

```
"Analyze this file: couple buying at $720K, 10% down in Ontario,
 combined $160K income, car loan $510, student loan $320, credit card $9,500 balance."

"Generate a document checklist for a self-employed borrower
 doing a purchase in BC with 20% down."

"Draft a conditional approval email — lender came back with 4 conditions."

"Stress test this file at the qualifying rate and tell me
 the maximum purchase price they qualify for."

"Flag any expired documents: pay stub 45 days old,
 NOA only from 2022, bank statements 95 days old."
```

## Price

$199 — one-time, all platform versions included.
