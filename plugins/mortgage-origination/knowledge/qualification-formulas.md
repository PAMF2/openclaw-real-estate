# Mortgage Qualification Formulas & Guidelines
> Complete reference for residential mortgage qualification calculations. Covers Canada (GDS/TDS, stress test) and United States (DTI, front-end/back-end). All formulas with worked examples and lender benchmarks.

---

## Canada — GDS and TDS Ratios

### Definitions

**PITH** = Principal + Interest + Property Tax + Heat

- **Principal & Interest (P&I)**: Monthly mortgage payment at the qualifying rate (not the contract rate — see Stress Test below)
- **Property Tax**: Annual property tax / 12. Use actual amount from tax bill or assessment. If unknown, use 1.0-1.5% of purchase price / 12 as an estimate.
- **Heat**: Actual monthly heating cost. If unknown, use $150/month (OSFI default).

**Condo Fee Add-Back**: Use 50% of the monthly condo/strata fee. This is the standard across most institutional lenders.

---

### GDS — Gross Debt Service Ratio

```
GDS = (PITH + 50% of monthly condo fee) / Gross Monthly Income

Maximum: 39%

Example:
  Monthly P&I (at qualifying rate):     $2,450
  Property Tax (monthly):               $400
  Heat:                                 $150
  Condo fee (50% of $600):              $300
  Total PITH + condo:                   $3,300

  Gross Monthly Income:                 $8,750

  GDS = 3,300 / 8,750 = 37.7%  -- PASS (below 39%)
```

**GDS Benchmarks:**
| GDS | Assessment |
|-----|-----------|
| Below 32% | Comfortable — most lenders approve without exception |
| 32-36% | Acceptable — standard approval |
| 36-39% | Elevated — may require compensating factors |
| Above 39% | Exceeds maximum — does not qualify (insured or conventional) |

---

### TDS — Total Debt Service Ratio

```
TDS = (PITH + 50% condo fee + all other monthly debt obligations) / Gross Monthly Income

Maximum: 44%

Other debt obligations include:
  - Car loans and leases (monthly payment)
  - Lines of credit (3% of outstanding balance, or monthly payment if higher)
  - Credit card balances (3% of outstanding balance, not the minimum payment)
  - Student loans (monthly payment as stated on credit bureau)
  - Spousal/child support obligations (full amount from court order)
  - Other mortgages (full PITH of each property)

Example (continuing from GDS above):
  PITH + condo:                         $3,300
  Car loan:                             $520
  Line of credit ($15,000 × 3%):        $450
  Credit card ($8,000 balance × 3%):    $240
  Total monthly obligations:            $4,510

  Gross Monthly Income:                 $8,750

  TDS = 4,510 / 8,750 = 51.5%  -- FAIL (above 44%)

  Action: Borrower would need to pay down the line of credit,
  increase income, or reduce the purchase price to qualify.
```

**TDS Benchmarks:**
| TDS | Assessment |
|-----|-----------|
| Below 38% | Comfortable |
| 38-42% | Acceptable — standard approval |
| 42-44% | Elevated — compensating factors help |
| Above 44% | Exceeds maximum — does not qualify |

---

### Credit Card and LOC Payments in TDS

Most Canadian institutional lenders use:
- **Credit cards**: 3% of the credit limit (not the outstanding balance, and not the minimum payment shown on the statement). Some lenders use 3% of outstanding balance — confirm with specific lender.
- **Unsecured lines of credit**: 3% of the outstanding balance.
- **Secured lines of credit (HELOC)**: Full balance treated at 3% monthly, or monthly payment if higher. Some lenders add the full balance to TDS obligations.

---

## Canada — Stress Test (Mortgage Qualifying Rate)

### Rule

```
Qualifying Rate = MAX(Contract Rate + 2.00%, OSFI Minimum Qualifying Rate)

As of the knowledge cutoff:
  OSFI Minimum Qualifying Rate: 5.25%
  (This floor is reviewed periodically — confirm the current rate via OSFI or DLC/CAAMP publications)

Example A — Low contract rate environment:
  Contract rate: 3.00%
  Contract + 2%: 5.00%
  OSFI floor:    5.25%
  Qualifying rate: 5.25%  (floor applies)

Example B — Elevated rate environment:
  Contract rate: 5.50%
  Contract + 2%: 7.50%
  OSFI floor:    5.25%
  Qualifying rate: 7.50%  (contract + 2% applies)
```

The stress test applies to:
- Insured mortgages (LTV above 80% — CMHC, Sagen, Canada Guaranty)
- Uninsured conventional mortgages at federally regulated lenders (banks, credit unions that have opted in)
- Most provincial credit unions have adopted equivalent guidelines

**Impact of stress test on qualifying amount:**

```
Example: Borrower qualifies based on income with TDS target of 44%.
  Gross monthly income: $10,000
  Existing debts: $800/month
  Available for housing (44% TDS - debts): $3,600/month

  At contract rate 5.50% (25yr amortization):
    Max mortgage: ~$595,000

  At qualifying rate 7.50% (25yr amortization, stress test):
    Max mortgage: ~$510,000

  Reduction in purchasing power: ~$85,000
```

---

## Canada — Mortgage Insurance Premiums

Mortgage insurance is required when the LTV exceeds 80% (down payment less than 20%).

| LTV | CMHC / Sagen / Canada Guaranty Premium |
|-----|----------------------------------------|
| 80.01% - 85.00% | 2.80% of insured mortgage amount |
| 85.01% - 90.00% | 3.10% |
| 90.01% - 95.00% | 4.00% |
| Above 95% | Not permitted (minimum 5% down payment required) |

**Minimum down payment requirements (Canada):**
- Purchase price up to $500,000: 5% minimum
- $500,001 to $999,999: 5% on first $500K + 10% on the balance
- $1,000,000 and above: 20% minimum (not insurable)

The premium is added to the mortgage amount and amortized over the mortgage term.

```
Example:
  Purchase price: $600,000
  Down payment: $50,000 (8.33% — triggers insurance)
  Insured mortgage: $550,000
  LTV: 91.67% → Premium rate: 4.00%
  Premium: $550,000 × 4.00% = $22,000
  Total mortgage: $572,000
  (Premium is added to the mortgage, not paid upfront)
```

---

## United States — DTI Ratios

### Front-End DTI (Housing Ratio)

```
Front-End DTI = (PITI + Monthly HOA Fee) / Gross Monthly Income

PITI = Principal + Interest + Taxes + Insurance (homeowner's insurance)

Maximums:
  Conventional (Fannie Mae / Freddie Mac): 28% (manual underwriting)
  FHA: 31%
  VA: No fixed front-end maximum (lender discretion)
  USDA: 29%

Note: AUS (DU / LP) may approve above these manual limits with compensating factors.

Example:
  Monthly P&I:                           $2,100
  Property tax (monthly):                $450
  Homeowner's insurance (monthly):       $150
  HOA (monthly):                         $200
  Total PITI + HOA:                      $2,900

  Gross Monthly Income:                  $10,500

  Front-End DTI = 2,900 / 10,500 = 27.6%  -- PASS (conventional manual max 28%)
```

---

### Back-End DTI (Total DTI)

```
Back-End DTI = (PITI + HOA + all monthly debt obligations) / Gross Monthly Income

Monthly debt obligations include:
  - Minimum credit card payments (from credit report)
  - Car loans and leases
  - Student loans (1% of balance if deferred — varies by loan type)
  - Personal loans
  - Child/spousal support (full obligation)
  - Other mortgage PITI payments

Maximums:
  Conventional (manual underwriting): 36%
  Conventional (AUS — DU / LP): up to 45-50% with strong compensating factors
  FHA (manual): 43%
  FHA (AUS): up to 56-57% with compensating factors
  VA: 41% (guideline; AUS may approve higher)
  USDA: 41%

Example (continuing from front-end):
  PITI + HOA:                            $2,900
  Car loan:                              $480
  Student loan (income-based repayment): $220
  Credit card minimums:                  $150
  Total monthly obligations:             $3,750

  Gross Monthly Income:                  $10,500

  Back-End DTI = 3,750 / 10,500 = 35.7%  -- PASS (conventional manual max 36%)
```

---

### US Student Loan Treatment in DTI

Student loan DTI treatment varies by loan type and status:

| Loan Type | Deferred / IBR Treatment |
|-----------|--------------------------|
| Conventional (Fannie Mae) | Greater of: 1% of outstanding balance OR actual payment from credit report |
| Conventional (Freddie Mac) | Actual payment if ≥ $0; if $0, use 0.5% of balance |
| FHA | Greater of: 1% of outstanding balance OR actual payment |
| VA | Actual payment from credit report; if deferred, lender uses 5% of balance / 12 |
| USDA | Greater of: actual payment OR 1% of balance |

---

### US Conforming Loan Limits (Reference)

Conforming loan limits are set annually by the FHFA. Loans above the limit require jumbo financing with tighter qualification standards.

| Year | Baseline Limit (single unit) | High-Cost Area Limit |
|------|-----------------------------|--------------------|
| 2024 | $766,550 | $1,149,825 |
| 2025 | $806,500 | $1,209,750 |

(Confirm current limits at fhfa.gov — updated each November.)

---

## Payment Reference Tables

### Canada — Monthly P&I by Mortgage Amount and Rate (25-Year Amortization)

| Mortgage Amount | 4.50% | 5.00% | 5.50% | 6.00% | 6.50% | 7.00% |
|----------------|-------|-------|-------|-------|-------|-------|
| $300,000 | $1,630 | $1,746 | $1,864 | $1,985 | $2,109 | $2,236 |
| $400,000 | $2,173 | $2,328 | $2,486 | $2,647 | $2,812 | $2,981 |
| $500,000 | $2,717 | $2,910 | $3,107 | $3,309 | $3,515 | $3,726 |
| $600,000 | $3,260 | $3,492 | $3,729 | $3,971 | $4,218 | $4,471 |
| $700,000 | $3,803 | $4,074 | $4,350 | $4,633 | $4,921 | $5,216 |
| $800,000 | $4,347 | $4,656 | $4,972 | $5,294 | $5,624 | $5,962 |

Note: Canadian mortgages compound semi-annually (not monthly). These figures reflect semi-annual compounding with monthly payments.

### United States — Monthly P&I by Loan Amount and Rate (30-Year Amortization)

| Loan Amount | 5.50% | 6.00% | 6.50% | 7.00% | 7.50% | 8.00% |
|------------|-------|-------|-------|-------|-------|-------|
| $300,000 | $1,703 | $1,799 | $1,896 | $1,996 | $2,098 | $2,201 |
| $400,000 | $2,271 | $2,398 | $2,528 | $2,661 | $2,797 | $2,935 |
| $500,000 | $2,839 | $2,998 | $3,160 | $3,327 | $3,496 | $3,669 |
| $600,000 | $3,406 | $3,597 | $3,792 | $3,992 | $4,195 | $4,403 |
| $700,000 | $3,974 | $4,197 | $4,424 | $4,657 | $4,895 | $5,137 |
| $800,000 | $4,542 | $4,796 | $5,055 | $5,322 | $5,594 | $5,871 |

---

## Common Lender Guidelines

### Canadian Institutional Lenders (A-side / Schedule I Banks)

| Guideline | Typical Requirement |
|-----------|-------------------|
| GDS maximum | 39% |
| TDS maximum | 44% |
| Minimum beacon / credit score | 680 (some lenders 650) |
| Minimum down payment | 5% (up to $999,999 purchase price) |
| Minimum employment | 3 months at current employer (permanent); 2 years same field (contract/variable) |
| Self-employed minimum | 2 years self-employment history |
| Maximum amortization | 25 years (insured); 30 years (conventional, some lenders 35yr) |
| Maximum TDS exception | 44% hard maximum for insured; some lenders allow 44% with strong credit |

### Canadian B-lenders / Alternative Lenders

| Guideline | Typical Range |
|-----------|--------------|
| GDS maximum | 39-45% |
| TDS maximum | 44-50% |
| Minimum credit score | 550-620 |
| Rate premium above A-side | 1.00-3.00% |
| Lender fee | 0.50-2.00% of mortgage amount |
| Broker fee | 0.50-1.00% |
| Self-employed: stated income | Available at lower LTV (65-75% maximum) |

### US Conventional (Fannie Mae / Freddie Mac)

| Guideline | Manual Underwriting | AUS (DU/LP) |
|-----------|--------------------|-----------:|
| Front-end DTI | 28% | Up to 36-45% |
| Back-end DTI | 36% | Up to 45-50% |
| Minimum credit score | 620 | 620 |
| Minimum down payment | 3-5% | 3-5% |
| PMI required | LTV above 80% | LTV above 80% |
| Maximum loan amount | Conforming limit | Conforming limit |

### US FHA

| Guideline | Requirement |
|-----------|-----------|
| Front-end DTI | 31% (manual); higher with AUS |
| Back-end DTI | 43% (manual); up to 56-57% AUS |
| Minimum credit score | 580 (3.5% down); 500 (10% down) |
| Minimum down payment | 3.5% |
| MIP (upfront) | 1.75% of base loan amount |
| MIP (annual) | 0.15-0.75% depending on LTV and term |

---

## Qualifying Amount Calculator Logic

To determine maximum purchase price given income and existing debts:

```
Step 1: Determine available TDS room
  Available TDS = Gross Monthly Income × TDS Maximum (44% Canada, 43% US FHA)
  Available for housing = Available TDS - Existing Monthly Debts

Step 2: Solve for maximum PITH (Canada) or PITI (US)
  Max PITH = Available for housing - 50% condo fee (if applicable)

Step 3: Isolate P&I from PITH
  Max P&I = Max PITH - Property Tax (monthly estimate) - Heat ($150) - Condo fee portion

Step 4: Use amortization factor to determine maximum mortgage
  Max Mortgage = Max P&I / Monthly Payment Factor per $1,000

Step 5: Calculate maximum purchase price
  Max Purchase = Max Mortgage / (1 - Down Payment Percentage)
  Subtract mortgage insurance premium if LTV > 80%

Example (Canada):
  Gross monthly income:      $9,000
  Existing monthly debts:    $700
  TDS maximum (44%):         $9,000 × 0.44 = $3,960
  Available for housing:     $3,960 - $700 = $3,260

  Assume: property tax $350/month, heat $150/month, no condo fee
  Max P&I:                   $3,260 - $350 - $150 = $2,760

  At stress test rate 7.50%, 25yr amortization:
  Payment per $1,000 = $7.19 (semi-annual compounding)
  Max mortgage = $2,760 / $7.19 × $1,000 = ~$384,000

  With 10% down (LTV 90%):
  Purchase price maximum = $384,000 / 0.90 = ~$426,000
  (Subject to stress test confirming this at qualifying rate)
```
