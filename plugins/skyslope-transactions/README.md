# SkySlope Transaction Assistant

An AI plugin for real estate agents and transaction coordinators. Paste your SkySlope transaction details and get a complete transaction prep package: deadline tracker, checklist gap analysis, client status emails, and broker compliance summaries — all formatted and ready to use.

Built for agents who manage their own files and TCs handling multiple transactions simultaneously.

---

## What It Does

**Deadline Extraction and Prioritization**
Paste any executed contract or transaction summary. The assistant extracts every key date — inspection, financing, appraisal, title review, closing disclosure, and closing — and sorts them by urgency with clear action items for each.

**Checklist Gap Analysis**
Describe what is currently in your SkySlope file. The assistant identifies what is missing, what is incomplete, and what still needs to be collected before compliance review — prioritized by risk.

**Client Status Emails**
Get professionally drafted status updates for buyers and sellers at any stage: under contract, post-inspection, pre-closing, and day of close. Plain language, no jargon, ready to send after a quick review.

**Compliance Summary Preparation**
Generate a broker-ready compliance checklist covering required disclosures, TRID items, state-specific forms, and flagged anomalies — formatted for submission or broker sign-off.

**Transaction Handoff Narratives**
When a TC changes mid-transaction, generate a complete handoff document that brings the new coordinator up to speed in minutes: parties, status, open items, and tone notes.

**Contingency Notices**
Draft inspection, financing, and appraisal contingency removal notices based on contract terms. All drafts are marked for agent review before sending.

---

## Platforms

### Claude (claude.ai)
Full-featured version with detailed output formatting, multi-session transaction tracking, and the complete knowledge base.

Setup:
1. Open Claude.ai and create a new Project
2. Paste the contents of `claude/system-prompt.md` into the Project Instructions field
3. Upload `knowledge/transaction-checklist-templates.md` and `knowledge/compliance-requirements.md` as Project files
4. Start a new conversation and paste your transaction details

### ChatGPT / Codex (chat.openai.com)
Concise version optimized for quick interactions and CRM-style outputs.

Setup:
1. Go to chat.openai.com and open "Explore GPTs" or "My GPTs"
2. Create a new GPT
3. Paste the contents of `codex/instructions.md` into the Instructions field
4. Use the conversation starters from `codex/config.json`
5. Upload the knowledge files as knowledge base documents

### Perplexity AI (perplexity.ai)
Research-optimized version that cites regulations, state-specific requirements, and RESPA/TRID rules with sources.

Setup:
1. Go to Perplexity and open the Spaces section
2. Create a new Space
3. Paste the contents of `perplexity/system-prompt.md` into the Space instructions
4. Use this version when you need cited regulatory guidance or state-specific compliance research

Best for: "What are the disclosure requirements for a short sale in Texas?" or "What is the TRID rule for Closing Disclosure delivery?"

### Manus
Autonomous version that creates a complete, organized transaction file structure from a single input — no follow-up prompts required.

Setup:
1. Open Manus and create a new agent
2. Paste the contents of `manus/instructions.md` as the agent's system instructions
3. Paste your transaction details as the first message
4. The agent will generate a full folder structure with all pre-drafted documents

Best for: Opening a new transaction file and getting every template, email, checklist, and compliance doc ready in one pass.

---

## Quick Start

Paste this into Claude, ChatGPT, or Manus to get your first transaction prep package:

```
New transaction:
Property: [Address]
Buyers/Sellers: [Names]
Purchase price: [Amount]
Mutual acceptance date: [Date]
Inspection deadline: [Date]
Financing deadline: [Date]
Closing date: [Date]
Lender: [Name and phone]
Title/Escrow: [Name and phone]
Other agent: [Name and phone]
Side: [Buyer / Seller / Dual]

Help me prep this transaction file.
```

---

## Knowledge Base

The `knowledge/` folder contains two reference documents included in the Claude and ChatGPT setups:

- **transaction-checklist-templates.md**: Complete buyer-side and seller-side checklists from offer to close, key deadline timeframes, and the most common missing document flags
- **compliance-requirements.md**: Required disclosures by transaction type, wire fraud prevention protocol, Fair Housing compliance notes, document retention requirements, and RESPA/TRID reference

---

## Examples

See `examples/complete-example-transaction-prep.md` for three complete sessions:
1. Full transaction prep for a new buyer-side file (deadline tracker, checklist, client email, compliance summary)
2. Mid-transaction checklist review 8 days before closing
3. TC handoff narrative for a new coordinator

---

## What the Plugin Does Not Do

- It does not connect to SkySlope, DocuSign, MLS, or any external system
- It does not send emails or messages on your behalf
- It does not provide legal advice — questions about contract interpretation should go to a real estate attorney or broker
- It does not verify wire instructions under any circumstances — always call the title company directly on a known number

---

## Notes for Transaction Coordinators

The assistant follows the TC workflow standard: every action item has an assigned owner (Buyer / Seller / Agent / Lender / Title / TC), every deadline includes a business day calculation, and every pre-closing document includes a wire fraud prevention reference. The compliance summaries are formatted for broker sign-off, not self-certification.

For multi-transaction management, create one Claude Project per active file, or use a single session with a clear file identifier at the start of each transaction block.
