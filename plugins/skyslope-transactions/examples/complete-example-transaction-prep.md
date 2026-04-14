# SkySlope Transaction Assistant — Complete Input/Output Example

This document shows a real session using the SkySlope Transaction Assistant plugin with Claude. The agent pastes transaction details and receives a full transaction prep package.

---

## EXAMPLE SESSION 1: Full Transaction Prep — Buyer Side

### User Input
```
New transaction. Buyer: Marcus and Diane Webb. Property: 1847 Ridgecrest Blvd, 
Austin, TX 78731. Purchase price: $589,000. EMD: $10,000. 

Key dates:
- Mutual acceptance: April 7, 2026
- Inspection contingency deadline: April 17, 2026
- Financing contingency deadline: May 1, 2026
- Appraisal deadline: April 28, 2026
- Closing date: May 15, 2026

Lender: HomePoint Financial, loan officer Jason Alvarez, 512-555-0181
Title: Lone Star Title, escrow officer Priya Khatri, 512-555-0234
Listing agent: Carol Meier, Realty Austin, 512-555-0107

I'm the buyer's agent. File is in SkySlope. Help me prep this transaction.
```

### Claude's Response

---

**Transaction Prep Complete — 1847 Ridgecrest Blvd, Austin TX**
File ready for review. Here is your full prep package.

---

### TRANSACTION SUMMARY

| Field | Detail |
|---|---|
| Property | 1847 Ridgecrest Blvd, Austin, TX 78731 |
| Buyers | Marcus and Diane Webb |
| Purchase Price | $589,000 |
| Earnest Money | $10,000 |
| Transaction Side | Buyer |
| Mutual Acceptance | April 7, 2026 |
| Closing Date | May 15, 2026 |
| Lender | HomePoint Financial — Jason Alvarez (512-555-0181) |
| Title/Escrow | Lone Star Title — Priya Khatri (512-555-0234) |
| Listing Agent | Carol Meier, Realty Austin (512-555-0107) |

---

### DEADLINE TRACKER

**CRITICAL (action required immediately)**

```
[ ] INSPECTION CONTINGENCY DEADLINE
    Due: April 17, 2026 (Friday) — 10 days from MEC
    Status: 10 days out as of today (April 7)
    Action: Schedule inspection NOW. 10 days is tight in a hot market.
    Owner: You (coordinate with Carol Meier for access)
```

**URGENT (within 5 business days of today)**

```
[ ] EARNEST MONEY DEPOSIT
    Due: Per contract (verify — Texas contracts typically 3 business days from MEC)
    Deadline: April 10, 2026 (3 business days from April 7)
    Action: Confirm EMD delivery method with Lone Star Title today.
    Owner: Marcus and Diane Webb / You
```

**UPCOMING (within 10 business days)**

```
[ ] LOAN APPLICATION SUBMITTED
    Due: April 14, 2026 (typical — verify against contract)
    Action: Confirm Jason Alvarez received the executed PSA and has everything needed.
    Owner: Jason Alvarez / Buyers

[ ] LOAN ESTIMATE DELIVERED TO BUYERS
    Due: 3 business days from loan application (TRID requirement)
    Expected: April 17, 2026 (if application submitted April 14)
    Action: Confirm buyers received and reviewed LE before signing.
    Owner: Jason Alvarez
```

**ON TRACK**

```
[ ] APPRAISAL DEADLINE
    Due: April 28, 2026
    Action: Confirm appraisal ordered after loan application.
    Owner: Jason Alvarez / Lender

[ ] FINANCING CONTINGENCY REMOVAL
    Due: May 1, 2026
    Action: Monitor loan approval. Removal must be in writing.
    Owner: You (with buyer signature)

[ ] CLOSING DISCLOSURE DELIVERED
    Due: May 12, 2026 (3 business days before May 15 closing — verify no holidays)
    Action: Confirm with Lone Star Title. Restarts the clock if loan product changes.
    Owner: Priya Khatri / Jason Alvarez

[ ] FINAL WALKTHROUGH
    Due: May 13-14, 2026 (1-2 days before closing)
    Action: Schedule with Carol Meier.
    Owner: You / Carol Meier

[ ] CLOSING DATE
    Due: May 15, 2026
    Owner: All parties
```

---

### CHECKLIST GAP ANALYSIS

Documents to upload to SkySlope — priority order:

**MISSING — Upload immediately**
- [ ] Executed Purchase and Sale Agreement (all pages, all addenda)
- [ ] Agency Disclosure — buyer signature confirmed?
- [ ] Earnest Money Receipt — upload once received from Lone Star Title
- [ ] Lead-Based Paint Disclosure — required if home built before 1978. Confirm home age.

**PENDING — Collect during inspection period**
- [ ] Home Inspection Report
- [ ] Repair Request / Inspection Response (TREC form or custom)
- [ ] Inspection Contingency Removal (once buyer satisfied or repair agreed)

**PENDING — Collect during financing period**
- [ ] Loan Estimate (copy for buyer file)
- [ ] Appraisal Report
- [ ] Loan Commitment Letter / Conditional Approval
- [ ] Financing Contingency Removal

**PENDING — Pre-closing**
- [ ] Closing Disclosure
- [ ] Homeowner's Insurance Binder
- [ ] Final Walkthrough Form (if required by brokerage)
- [ ] Wire Fraud Prevention Acknowledgment (buyers)

**COMPLIANCE RISK: MEDIUM**
Notes: File is new — no documents uploaded yet. Prioritize PSA, agency disclosure, and EMD receipt this week. Inspection deadline is the most time-sensitive item.

---

### CLIENT STATUS EMAIL — Under Contract

DRAFT — Review before sending

```
Subject: You're Under Contract! — 1847 Ridgecrest Blvd Update

Marcus and Diane,

Congratulations — you are officially under contract on 1847 Ridgecrest Blvd! 
This is an exciting step, and I want to make sure you know exactly what 
happens next so there are no surprises.

WHAT'S BEEN COMPLETED
- Purchase and Sale Agreement signed by all parties (April 7)
- Escrow opened with Lone Star Title (Priya Khatri, 512-555-0234)

WHAT'S HAPPENING THIS WEEK
- Home inspection: I'll send you 2-3 inspector options today. We need to 
  schedule and complete the inspection by April 17 — please confirm your 
  availability for the week of April 8.
- Earnest money: Your $10,000 deposit needs to reach Lone Star Title by 
  April 10. I'll send you their wire instructions shortly. IMPORTANT: 
  Before wiring any funds, call Lone Star Title directly at 512-555-0234 
  to confirm the instructions — never wire based on email alone.
- Loan application: Jason Alvarez at HomePoint Financial (512-555-0181) 
  will be reaching out to collect final documents. Please respond quickly 
  — the lender timeline directly affects your closing date.

YOUR CLOSING TIMELINE AT A GLANCE
- April 17: Inspection deadline
- April 28: Appraisal deadline
- May 1: Financing contingency deadline
- May 15: Closing date (target)

ACTION NEEDED FROM YOU
1. Confirm inspection availability for April 8-16
2. Wire the $10,000 EMD to Lone Star Title by April 10 (call first to confirm)
3. Respond to Jason Alvarez's document requests within 24 hours

I'm here for any questions — text or call me anytime. Let's get this closed!

[Agent Name]
[Phone] | [Email]
```

---

### COMPLIANCE SUMMARY (for broker review)

```
TRANSACTION: 1847 Ridgecrest Blvd, Austin, TX 78731
FILE TYPE: Buyer Representation
DATE PREPARED: April 7, 2026

COMPLIANCE CHECKLIST

Federal Requirements
[ ] Agency Disclosure — signed before offer submitted? (Confirm date)
[ ] Lead-Based Paint Disclosure — home age not yet confirmed. Flag if pre-1978.
[ ] TRID: Loan Estimate delivery tracking initiated
[ ] TRID: Closing Disclosure 3-business-day rule — tracked for May 12 delivery

State Requirements (Texas)
[ ] TREC agency disclosure forms used (not custom forms)
[ ] EMD held in escrow (Lone Star Title) — not in broker trust account
[ ] Texas Property Code disclosure requirements met by seller

Brokerage Policy
[ ] Wire fraud prevention protocol documented? [PENDING]
[ ] Dual agency? No.
[ ] Referral fee disclosure? [Confirm if referral involved]

RISK FLAGS
- Inspection deadline (April 17) is 10 days from MEC — confirm inspection is scheduled
- EMD receipt not yet in file — upload immediately when received
- Home age not confirmed — verify lead paint disclosure requirement

OVERALL COMPLIANCE STATUS: IN PROGRESS
Broker sign-off requested after inspection period closes.
```

---

## EXAMPLE SESSION 2: Checklist Review Mid-Transaction

### User Input
```
I'm 3 weeks into this transaction and closing is in 8 days. I need you to 
check my SkySlope file. Here's what I have uploaded:

- Executed PSA (all addenda)
- Agency disclosure (buyer signed)
- EMD receipt
- Home inspection report
- Repair addendum (seller agreed to $3,500 credit)
- Appraisal report ($595,000 — above purchase price)
- Loan commitment letter from lender

What am I missing? Closing is May 15.
```

### Claude's Response

---

**Checklist Review — 8 Days to Closing**

Strong file — the core milestones are well documented. Here is your gap analysis for the final stretch.

**MISSING — Required before compliance submission**

```
INSPECTION CONTINGENCY REMOVAL
Issue: You have the repair addendum but no signed inspection contingency removal.
These are separate documents. The addendum documents the repair agreement; the 
removal waives the contingency itself. If the buyer did not sign a removal 
form, the contingency may technically still be active.
Action: Have buyer sign the inspection contingency removal today.
Risk: HIGH — broker will flag this at compliance review.

FINANCING CONTINGENCY REMOVAL
Issue: Not in file. Loan commitment letter is present but does not substitute 
for the buyer's signed financing contingency removal.
Action: Confirm the financing contingency deadline has passed. If so, buyer 
must sign the removal immediately. If the deadline is still open, obtain 
removal as soon as loan is clear to close.
Risk: HIGH

WIRE FRAUD PREVENTION ACKNOWLEDGMENT
Issue: No documentation that buyers were informed of wire fraud protocol.
Action: Email buyers the wire fraud warning today. Upload the email or a 
signed acknowledgment to SkySlope.
Risk: MEDIUM — required by most brokerage policies and increasingly by E&O insurers.
```

**MISSING — Required before closing**

```
CLOSING DISCLOSURE (BUYER COPY)
Due: 3 business days before May 15 = received by buyer no later than May 12.
Today is May 7. You have 5 days.
Action: Confirm with Lone Star Title that CD has been sent and buyer received it.
Upload confirmation or the CD itself to SkySlope.

HOMEOWNER'S INSURANCE BINDER
Issue: Not in file.
Action: Ask buyers to send you the insurance binder (proof of binding) this 
week. Lender requires it before funding. Upload to file.

FINAL WALKTHROUGH DOCUMENTATION
Issue: Final walkthrough not yet scheduled (8 days out).
Action: Schedule with Carol Meier for May 13 or 14. Some brokerages require 
a signed walkthrough form — check your brokerage policy.
```

**VERIFIED COMPLETE — No action needed**

```
[x] Executed PSA with all addenda
[x] Agency disclosure (buyer signed)
[x] Earnest money deposit receipt
[x] Home inspection report
[x] Repair addendum ($3,500 credit)
[x] Appraisal report ($595,000 — at value)
[x] Loan commitment letter
```

**COMPLIANCE RISK: MEDIUM — Two high-priority items (contingency removals)**

Resolve the two contingency removals today. Everything else can be collected through May 13 without jeopardizing the closing date, but the compliance file should be complete before you submit for broker review.

---

## EXAMPLE SESSION 3: Transaction Handoff for New TC

### User Input
```
Our TC is out sick and a new coordinator is taking over 1847 Ridgecrest. 
Write me a handoff summary she can use to get up to speed in 5 minutes.
```

### Claude's Response

---

**TRANSACTION HANDOFF SUMMARY**
For: New TC onboarding
Date: May 7, 2026
Prepared by: [Agent Name]

---

**THE PROPERTY**
1847 Ridgecrest Blvd, Austin, TX 78731
Buyer-side transaction. Single-family residential. Purchase price $589,000.

**THE BUYERS**
Marcus and Diane Webb — first-time move-up buyers, very responsive via text. Primary contact: Marcus, 512-555-XXXX.

**KEY CONTACTS**

| Role | Name | Phone | Email |
|---|---|---|---|
| Buyer's Agent | [Your Name] | [Phone] | [Email] |
| Listing Agent | Carol Meier | 512-555-0107 | [Email] |
| Lender / LO | Jason Alvarez, HomePoint | 512-555-0181 | [Email] |
| Title / Escrow | Priya Khatri, Lone Star Title | 512-555-0234 | [Email] |

**WHERE WE ARE**

Closing is May 15 — 8 days from today. The transaction is on track with two open items:
1. Inspection and financing contingency removals need buyer signatures today.
2. Final walkthrough needs to be scheduled with Carol Meier for May 13 or 14.

**WHAT IS DONE**
- PSA executed April 7, all addenda included
- EMD ($10,000) deposited to Lone Star Title — receipt in file
- Home inspection completed April 12, repair addendum executed ($3,500 credit to buyer at close)
- Appraisal completed April 24 — value $595,000, above purchase price
- Loan commitment received from HomePoint Financial

**WHAT NEEDS TO HAPPEN THIS WEEK**

| Action | Owner | Deadline |
|---|---|---|
| Obtain signed inspection contingency removal from buyers | New TC | TODAY |
| Obtain signed financing contingency removal from buyers | New TC | TODAY |
| Confirm Closing Disclosure sent and received by buyers | Priya Khatri | May 12 |
| Schedule final walkthrough | New TC with Carol Meier | May 13 or 14 |
| Confirm homeowner's insurance binder | Buyers / New TC | May 12 |
| Upload wire fraud acknowledgment | New TC | TODAY |
| Submit SkySlope file for compliance review | New TC | May 13 |

**KNOWN ISSUES**
- None beyond the two open contingency removals. File is clean.

**TONE NOTE**
Buyers are engaged and responsive. Keep updates concise and positive — they are first-time move-up buyers and tend to get anxious if communication goes quiet. A quick "everything is on track" text every 2-3 days goes a long way.

Questions: Call [Agent Name] at [Phone] before reaching out to any party directly.
