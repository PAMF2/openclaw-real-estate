# CRM Follow-Up System — Complete Input/Output Example

This document shows a real session using the CRM Follow-Up System plugin with Claude. The MCP server connects to Follow Up Boss, and the AI generates a complete follow-up plan.

---

## EXAMPLE SESSION 1: New Zillow Lead

### User Input
```
I just got a new lead from Zillow. Her name is Maria Santos, email maria.santos@gmail.com, 
phone 555-0147. She's looking at a 3BR/2BA in the Westside neighborhood, budget around $550K. 
She's pre-approved with Chase. Create her in my CRM and build me a 30-day follow-up plan.
```

### What Claude Does (behind the scenes)

1. **Calls MCP tool `create_contact`:**
```json
{
  "firstName": "Maria",
  "lastName": "Santos",
  "emails": [{"value": "maria.santos@gmail.com", "type": "personal"}],
  "phones": [{"value": "555-0147", "type": "mobile"}],
  "source": "Zillow",
  "tags": ["pre-approved", "buyer", "westside"],
  "properties": {
    "city": "Westside",
    "price": 550000,
    "bedrooms": 3,
    "bathrooms": 2,
    "type": "residential"
  }
}
```

2. **FUB API returns:**
```json
{
  "id": 48291,
  "firstName": "Maria",
  "lastName": "Santos",
  "stage": "New Lead",
  "created": "2026-04-08T14:23:00Z"
}
```

3. **Calls `create_task`** for first follow-up:
```json
{
  "personId": 48291,
  "name": "Text Maria Santos — Zillow lead, interested in 3BR Westside",
  "dueDate": "2026-04-08",
  "type": "text"
}
```

### Claude's Response to User

---

**Maria Santos has been added to Follow Up Boss.** Contact ID: 48291, tagged as "pre-approved, buyer, westside."

Here's your 30-day follow-up plan:

### LEAD ANALYSIS
| Field | Value |
|-------|-------|
| Name | Maria Santos |
| Source | Zillow |
| Temperature | **WARM** (pre-approved, specific area, but no urgency signal yet) |
| Budget | ~$550K |
| Criteria | 3BR/2BA, Westside neighborhood |

### 30-DAY SEQUENCE

**DAY 0 (TODAY) — Text | Now**
```
Hi Maria! This is [Agent Name] with [Brokerage]. I saw you're looking at 3BR homes in Westside — great area! I have 3 listings under $550K that just came on the market. Want me to send them over?
```
*Purpose: Quick personal connection, show responsiveness*
*If responds → schedule showing. If no response → continue to Day 0 email.*

**DAY 0 — Email | 4 hours after text**
Subject: *3BR homes in Westside under $550K — curated for you*
```
Hi Maria,

Thanks for reaching out! I specialize in the Westside neighborhood and wanted 
to share a few homes matching your criteria:

🏠 425 Maple Drive — 3BR/2BA, 1,850 sqft — $529,000
   Updated kitchen, hardwood floors, large backyard
   
🏠 891 Cedar Lane — 3BR/2.5BA, 2,100 sqft — $545,000
   Corner lot, new roof, open floor plan
   
🏠 203 Birch Court — 3BR/2BA, 1,720 sqft — $499,900
   Move-in ready, great school district, 2-car garage

Since you're already pre-approved with Chase, you're in a great position 
to move quickly if something catches your eye.

Would any of these work for a showing this week? I'm available Thursday 
and Friday afternoon.

Best,
[Agent Name]
[Phone] | [Email]
```

**DAY 1 — Text | 10:00 AM**
```
Hey Maria! Did you get a chance to look at those 3 listings I sent? 
The one on Maple Drive is getting a lot of interest — happy to get you 
in this week if you're curious.
```

**DAY 2 — Email | 9:00 AM**
Subject: *What Westside buyers should know right now*
```
Hi Maria,

Quick market update for the Westside area:

📊 Median price: $538K (up 3% from last quarter)
📊 Average days on market: 18 days
📊 New listings this week: 7 in your price range
📊 Homes selling above asking: 42%

The market is competitive but not crazy. With your pre-approval, 
you'll be well-positioned to make strong offers.

Want me to set up a custom search so you're the first to know 
when new listings hit?

Best,
[Agent Name]
```

**DAY 3 — Call | 2:00 PM**
```
SCRIPT:
"Hi Maria, this is [Agent] — I sent you a few listings earlier this week 
for Westside. Did any of those catch your eye?

[If yes] → "Great! Let's get you in to see them. What's your schedule 
look like this week?"

[If hesitant] → "No worries at all. Tell me — what's most important 
to you in your next home? Updated kitchen? Big backyard? Close to schools? 
That way I can really dial in what I'm sending you."

[If no answer] → Leave voicemail:
"Hey Maria, [Agent] here. Just wanted to check in on those Westside 
listings. A couple new ones came on today that I think you'd love. 
Give me a call when you get a chance — [Phone]. Talk soon!"
```

**DAY 5 — Email | 9:00 AM**
Subject: *3 things most Westside buyers wish they knew sooner*
```
[Value-add content about the neighborhood — school ratings, 
upcoming developments, walkability scores, restaurant scene]
```

**DAY 7 — Text | 12:00 PM**
```
Hi Maria! Just saw a new listing at 167 Oak St — 3BR/2BA, $539K, 
incredible kitchen reno. This one won't last. Want to see it Saturday?
```

**DAYS 10-30 — Continued Nurture**
| Day | Channel | Content |
|-----|---------|---------|
| 10 | Call | Status check + new listings |
| 12 | Email | New listings matching criteria |
| 14 | Text | Market insight or new listing alert |
| 17 | Email | Client success story / testimonial |
| 21 | Text | Check-in |
| 24 | Email | Area spotlight + new listings |
| 28 | Call | Monthly check-in |
| 30 | Email | Monthly market report |

### TASKS CREATED IN FOLLOW UP BOSS
- ✅ Day 0: Text Maria (due today)
- ✅ Day 0: Email listings (due today, 4pm)
- ✅ Day 1: Follow-up text (due tomorrow, 10am)
- ✅ Day 3: Call Maria (due April 11, 2pm)
- ✅ Day 7: Text new listing (due April 15)
- ✅ Day 10: Status call (due April 18)

All tasks are now in your Follow Up Boss task queue.

---

## EXAMPLE SESSION 2: Pipeline Review

### User Input
```
Show me all my active deals and tell me which ones need attention this week.
```

### What Claude Does

1. **Calls `list_deals`** with no filters to get all active deals
2. **Calls `list_tasks`** filtered by status: pending
3. Cross-references deals with overdue tasks

### Claude's Response

---

**Your Active Pipeline — 8 Deals**

| Deal | Contact | Stage | Value | Days in Stage | ⚠️ Action Needed |
|------|---------|-------|-------|---------------|-----------------|
| 425 Maple Dr — Buyer | Maria Santos | Showing | $529K | 3 days | Schedule 2nd showing |
| 891 Cedar Ln — Seller | Tom & Lisa Park | Under Contract | $545K | 12 days | Inspection next Tue |
| 167 Oak St — Buyer | James Wheeler | Offer Submitted | $539K | 5 days | **Waiting on seller response** |
| 302 Pine Ave — Seller | Rebecca Cruz | Active Listing | $620K | 21 days | **Price reduction discussion** |
| 88 Elm St — Buyer | David Kim | Pre-Approval | $480K | 8 days | Follow up with lender |
| 1200 Main St — Investor | Sarah Chen | Analysis | $420K | 2 days | Send deal analysis |
| 55 River Rd — Seller | Mike & Amy Foster | Coming Soon | $710K | 0 days | Photo shoot Friday |
| 910 Lake Dr — Buyer | Nicole Thompson | Closed Won | $595K | — | 🎉 Send closing gift |

### 🔴 Priority This Week

1. **James Wheeler — 167 Oak St**: Offer has been out 5 days with no response. Call the listing agent today to check status. If no response by tomorrow, discuss backup strategy with James.

2. **Rebecca Cruz — 302 Pine Ave**: 21 days on market, 4 showings, no offers. Time to discuss a price reduction. Current market data suggests $599K would be competitive. I've drafted talking points for the conversation.

3. **David Kim — 88 Elm St**: Pre-approval has been pending 8 days. Follow up with his lender to make sure nothing is stalled.

### ✅ On Track
- Maria Santos: Good momentum, keep nurturing
- Tom & Lisa Park: Inspection on Tuesday, normal timeline
- Mike & Amy Foster: Photos Friday, listing goes live Monday
- Nicole Thompson: CLOSED! Send gift and ask for review/referral

---

## EXAMPLE SESSION 3: MCP Server in Action

### User Input
```
Search for all my leads tagged "investor" and add a note to each one 
about the new 4-plex that just listed at 456 Main St for $420K.
```

### What Claude Does

1. **Calls `search_contacts`:**
```json
{"query": "", "tags": "investor", "limit": 50}
```

2. **API returns 6 contacts** tagged "investor"

3. **For each contact, calls `add_note`:**
```json
{
  "personId": 12345,
  "subject": "New Investment Listing — 456 Main St 4-Plex",
  "body": "New 4-plex listing at 456 Main St. Asking $420K. Each unit rents $1,100/mo ($4,400 gross). Cap rate ~8.2%. Worth reviewing for portfolio fit. Sent details via email."
}
```

### Claude's Response

---

Done! Added a note to all 6 investor contacts about the 456 Main St 4-plex:

| Contact | Note Added | Status |
|---------|-----------|--------|
| Sarah Chen | ✅ | Note added |
| Robert Garcia | ✅ | Note added |
| Priya Patel | ✅ | Note added |
| Marcus Johnson | ✅ | Note added |
| Linda Tran | ✅ | Note added |
| Keith Williams | ✅ | Note added |

Want me to also create a follow-up task to call each of them this week about this property?
