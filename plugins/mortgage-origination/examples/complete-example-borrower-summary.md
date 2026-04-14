# Mortgage Origination Assistant — Complete Example

## BROKER INPUT

```
New purchase file. Here are the details:

Borrower: David and Sarah Chen
David — salaried, $98,000/year base salary, 3 years at same employer
Sarah — salaried, $62,000/year base salary, 1.5 years at current employer (no probation clause)

Monthly debts:
- David: car loan $510/month
- Sarah: student loan $320/month
- Joint credit card: $9,500 balance

Purchase price: $720,000
Down payment: $72,000 (10%)
Property: freehold townhouse in Ontario, no condo fees
Property tax: ~$5,400/year
Target lender: TD Bank (A-lender)
Rate: 5-year fixed at 5.39%

They want to know if they qualify and what documents I need.
```

---

## ASSISTANT OUTPUT

---

# BORROWER FILE SUMMARY — David & Sarah Chen

## FILE SNAPSHOT

| Field | Detail |
|-------|--------|
| Borrowers | David Chen (primary) / Sarah Chen (co-borrower) |
| Deal type | Purchase — freehold townhouse |
| Province | Ontario |
| Purchase price | $720,000 |
| Down payment | $72,000 (10.00%) |
| Mortgage amount | $648,000 |
| LTV | 90.00% — mortgage insurance required |
| Insured mortgage amount | $648,000 |
| Insurance premium (4.00%) | $25,920 |
| Total insured mortgage | $673,920 |
| Target lender | TD Bank |
| Contract rate | 5.39% (5-year fixed) |
| Amortization | 25 years (insured maximum) |
| Property tax | $5,400/year ($450/month) |
| Condo fee | None (freehold) |
| Heat | $150/month (OSFI default) |

---

## STRESS TEST RATE

```
Contract rate:          5.39%
Contract rate + 2.00%:  7.39%
OSFI minimum floor:     5.25%

Qualifying rate:        7.39%  (contract + 2% applies — above OSFI floor)
```

---

## INCOME SUMMARY

| Borrower | Annual Income | Monthly Gross |
|----------|-------------|--------------|
| David Chen | $98,000 | $8,167 |
| Sarah Chen | $62,000 | $5,167 |
| **Combined** | **$160,000** | **$13,333** |

**Income notes:**
- David: 3 years with current employer — income is stable and confirmable. Full base used.
- Sarah: 1.5 years at current employer. No probation clause noted. Full base used. Most A-lenders require minimum 3 months at current job for salaried employees — confirm probation status is clear.
- No bonus or overtime income is being used.

---

## MONTHLY DEBT OBLIGATIONS

| Obligation | Monthly Amount | Notes |
|-----------|---------------|-------|
| David — car loan | $510 | Included in TDS |
| Sarah — student loan | $320 | Included in TDS |
| Joint credit card | $285 | 3% of $9,500 balance (A-lender standard) |
| **Total monthly debts** | **$1,115** | Excluding housing costs |

---

## QUALIFYING PAYMENT CALCULATION

Monthly P&I at qualifying rate 7.39%, $673,920 mortgage, 25-year amortization:

```
Using semi-annual compounding (Canadian standard):
Effective monthly rate = (1 + 0.0739/2)^(1/6) - 1 = 0.6062%

Monthly P&I = $673,920 × [0.6062% / (1 - (1 + 0.6062%)^-300)]
            = $673,920 × 0.007195
            = $4,851/month
```

| PITH Component | Monthly Amount |
|---------------|--------------|
| Principal & Interest (qualifying rate) | $4,851 |
| Property Tax | $450 |
| Heat | $150 |
| **Total PITH** | **$5,451** |

---

## QUALIFICATION RATIOS

### GDS — Gross Debt Service Ratio

```
GDS = PITH / Gross Monthly Income
    = $5,451 / $13,333
    = 40.9%

Maximum: 39%

RESULT: FAIL — GDS exceeds maximum by 1.9 percentage points
```

### TDS — Total Debt Service Ratio

```
TDS = (PITH + Monthly Debts) / Gross Monthly Income
    = ($5,451 + $1,115) / $13,333
    = $6,566 / $13,333
    = 49.2%

Maximum: 44%

RESULT: FAIL — TDS exceeds maximum by 5.2 percentage points
```

---

## QUALIFICATION VERDICT

**Does Not Qualify at $720,000 with $72,000 down at the current file structure.**

Both GDS (40.9%) and TDS (49.2%) exceed maximum thresholds when stressed to 7.39%. The primary pressure points are:

1. The qualifying rate (7.39%) significantly reduces purchasing power compared to the contract rate
2. The credit card balance ($9,500) adds $285/month to TDS obligations
3. Combined debt load ($1,115/month) leaves little room given the housing cost

---

## PATHS TO QUALIFICATION

### Option A — Pay Down Credit Card Before Closing

If the Chens pay off the $9,500 credit card balance before lender qualification:

```
Revised monthly debts:    $510 + $320 = $830 (card removed)
Revised TDS = ($5,451 + $830) / $13,333
            = $6,281 / $13,333
            = 47.1%

Still above 44% — not sufficient alone.
```

### Option B — Increase Down Payment to 20% (Conventional)

With 20% down ($144,000), no mortgage insurance is added and the mortgage drops to $576,000:

```
Monthly P&I at 7.39%, $576,000, 25yr: ~$4,146
Total PITH: $4,146 + $450 + $150 = $4,746

GDS = $4,746 / $13,333 = 35.6%  -- PASS
TDS = ($4,746 + $1,115) / $13,333 = $5,861 / $13,333 = 43.9%  -- PASS (just under 44%)
```

20% down would qualify this file, but requires an additional $72,000 from the borrowers.

### Option C — Reduce Purchase Price

At what purchase price does the file qualify with 10% down?

```
Working backward from TDS maximum:
Available for PITH = (44% × $13,333) - $1,115 = $4,747/month

Solve for P&I: $4,747 - $450 - $150 = $4,147/month

At 7.39%, 25yr, $4,147/month P&I → mortgage ≈ $576,400
Add insurance (4.00%): mortgage before insurance ≈ $554,200
Purchase price at 90% LTV: $554,200 / 0.90 = $616,000

Maximum qualifying purchase price (10% down): approximately $616,000
```

### Option D — Credit Card Paydown + Price Reduction

Pay off the credit card ($9,500) and lower purchase price to $660,000:

```
Down payment (10%): $66,000
Mortgage: $594,000
Insurance (4.00%): $23,760
Total mortgage: $617,760

P&I at 7.39%, 25yr: ~$4,447
Total PITH: $4,447 + $450 + $150 = $5,047

TDS = ($5,047 + $830) / $13,333 = 43.6%  -- PASS (barely)
GDS = $5,047 / $13,333 = 37.8%  -- PASS
```

**Recommended path: Option D** — pay off credit card and negotiate purchase price to $660,000 or below.

---

## DOCUMENT REQUEST LIST

Based on this file structure (employed salaried borrowers, purchase, 10% down, Ontario):

### Priority 1 — Required Before Submission

**Identity**
- [ ] Government-issued photo ID — David Chen
- [ ] Government-issued photo ID — Sarah Chen

**David — Employment**
- [ ] Employment letter on company letterhead (confirm: full-time, no probation, start date, $98,000 base) — within 90 days
- [ ] Two most recent pay stubs — within 30 days

**Sarah — Employment**
- [ ] Employment letter on company letterhead (confirm: full-time, no probation clause, start date, $62,000 base) — within 90 days
- [ ] Two most recent pay stubs — within 30 days
- [ ] **Confirm in writing that probation period is complete** — critical for A-lender approval at 1.5 years

**Down Payment**
- [ ] Bank statements — 90 days for both borrowers (confirm $72,000 source and history)
- [ ] If any large non-payroll deposits: explanation letter with sourcing documentation

**Property**
- [ ] Signed purchase and sale agreement (all schedules and amendments)
- [ ] MLS listing or property data sheet

### Priority 2 — Required for Conditional Approval Clearance

- [ ] Property tax bill (confirm $5,400/year)
- [ ] Home/fire insurance binder or confirmation (lender named as first loss payee)
- [ ] Void cheque or pre-authorized debit form

### Priority 3 — Required at or Before Closing

- [ ] Appraisal (TD will order through approved AMC)
- [ ] Signed mortgage commitment letter
- [ ] Lawyer/notary confirmation

---

## OUTSTANDING FLAGS

| Flag | Severity | Action Required |
|------|---------|----------------|
| GDS 40.9% exceeds 39% maximum | Critical | File does not qualify as structured — see Options A-D above |
| TDS 49.2% exceeds 44% maximum | Critical | File does not qualify as structured — see Options A-D above |
| Sarah's probation status | High | Confirm probation is complete before submission — employment letter must state clearly |
| Credit card $9,500 balance | Medium | Paydown removes $285/month from TDS; strongly recommended for qualification |
| Large down payment deposit sourcing | Unknown | Need to see 90 days of bank statements to confirm no unexplained deposits |

---

## TEAM HANDOFF SUMMARY

**For processor or associate use:**

File: David & Sarah Chen — Purchase $720,000, Ontario freehold townhouse
Status: Pre-submission — qualification issue identified

Key issue: File does not qualify at $720K with 10% down. GDS 40.9% (max 39%), TDS 49.2% (max 44%) at stress test rate 7.39%.

Recommended resolution: Client pays off $9,500 credit card AND negotiates purchase price to $660,000 or below. At those parameters, TDS 43.6% and GDS 37.8% — both within limits.

Alternatively, if client can increase down payment to $144,000 (20%), file qualifies at $720K without price reduction.

Pending items before submission:
- Employment letters and pay stubs (both borrowers)
- Confirm Sarah's probation status in writing
- Bank statements — 90 days
- Signed purchase and sale agreement

Next step: Broker to present options to client and confirm which path they are taking before proceeding with lender submission.

---

## DRAFT CLIENT UPDATE EMAIL

Subject: Your Mortgage Application — Qualification Review

Hi David and Sarah,

Thank you for trusting me with your mortgage. I've completed my initial review of your file and want to share some important findings before we submit to the lender.

Based on your current purchase price of $720,000 with a 10% down payment, your debt ratios come in slightly above the lender's maximum thresholds when we apply the mandatory stress test. This is a common situation and there are a few straightforward paths to resolve it.

Here are your options:

**Option 1 — Pay off the credit card and negotiate the purchase price.**
If you can pay off the $9,500 credit card balance and negotiate the purchase price to $660,000 or lower, your file qualifies under standard lender guidelines. This is likely the most achievable path.

**Option 2 — Increase your down payment to 20%.**
If you are able to bring your down payment up to $144,000 (20% of $720,000), the file qualifies at the current purchase price without needing to reduce the price.

**Option 3 — Purchase price reduction only.**
If keeping the current down payment and not paying the card, a purchase price at or below approximately $616,000 would qualify.

I recommend Option 1 as the most practical approach. It requires negotiating a small price reduction with the sellers and clearing the credit card balance before we finalize the application.

To move forward, I also need the following documents from you:

- Employment letters from both of your employers (I can send you a template)
- Your two most recent pay stubs (each)
- Bank statements from the past 90 days showing your down payment funds
- Signed purchase and sale agreement

Please let me know which option you would like to pursue and I can walk you through the next steps. I am confident we can get this done.

[Broker Name]
[Brokerage Name]
[Phone / Email]
