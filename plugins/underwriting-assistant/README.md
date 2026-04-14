# Underwriting Assistant

> Your senior underwriter in an AI — condition letters, income calcs, and decision memos in minutes.

Complete mortgage underwriting workflow support for underwriters and loan processors. Works with conventional, FHA, VA, USDA, and non-QM files.

## What It Does

| Capability | Description |
|-----------|-------------|
| Decision Summaries | Drafts full approve / approve with conditions / suspend / decline memos with narrative |
| Condition Letters | Generates PTD and PTF condition letters by category, numbered and ready to send |
| Income Calculations | Line-by-line qualifying income for salaried, self-employed, commission, rental, SS, and other sources |
| Credit Analysis | Score selection, derogatory history summary, collections treatment, dispute flags |
| Document Follow-Up | Professional borrower emails and processor requests for missing or expired items |
| File Notes | Compliance-ready notes for VVOE, layered risk, and exception documentation |
| Senior Briefings | One-page escalation memos for UW manager or senior underwriter review |

## Loan Products Covered

- Conventional (Fannie Mae DU / Freddie Mac LPA)
- FHA (HUD 4000.1)
- VA (VA Lenders Handbook M26-7)
- USDA (HB-1-3555)
- Non-QM (bank statement, asset depletion, DSCR, ITIN)
- Canada: CMHC insured and conventional (GDS/TDS, stress test)

## Works With

Any mortgage LOS or workflow tool: Encompass, Velocity, Calyx, Finmo, SimpleNexus, or manual file review. No integration required — paste file data and get a deliverable.

## Setup — Claude (5 minutes)

1. Create a new Claude Project
2. Paste `claude/system-prompt.md` into Project Instructions
3. Optionally upload `knowledge/underwriting-guidelines.md` and `knowledge/condition-letter-templates.md` as project knowledge files
4. Start a conversation with borrower file details

## Setup — ChatGPT (5 minutes)

1. Create a Custom GPT
2. Paste `codex/instructions.md` into Instructions
3. Upload the two knowledge files from the `knowledge/` folder
4. Enable Code Interpreter for income calculations

## Platforms

### Claude
Paste `claude/system-prompt.md` into your Claude Project Instructions. Upload both knowledge files to the Project for inline reference during file reviews.

### ChatGPT / Codex
Create a Custom GPT using `codex/instructions.md`. Upload the `knowledge/` files so the GPT can reference guidelines without you pasting them each time.

### Perplexity
Use `perplexity/system-prompt.md` as your Perplexity Space instructions. The search-optimized version will cite current Fannie Mae, FHA, and VA guideline sources inline.

### Manus
Use `manus/instructions.md` for autonomous operation. Manus will research current guideline updates, run the full underwriting workflow, and save all outputs as a structured file package.

## Knowledge Files

| File | Contents |
|------|----------|
| `knowledge/underwriting-guidelines.md` | Conventional, FHA, VA, USDA, non-QM, and Canada guidelines with LTV matrices, DTI limits, waiting periods, and income rules |
| `knowledge/condition-letter-templates.md` | Full condition bank by category — income, assets, property, credit, title, insurance, and funding conditions |

## Example Output

See `examples/complete-example-underwriting-summary.md` for a full worked example including:
- Complete underwriting decision summary memo
- Prior-to-docs condition letter
- Borrower follow-up email draft

## Price

$199 — one-time, all platform versions included.
