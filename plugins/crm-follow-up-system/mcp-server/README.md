# Follow Up Boss MCP Server

> Connect Claude directly to your Follow Up Boss CRM. Search contacts, create tasks, log calls, manage deals — all from within Claude.

## Tools Available

| Tool | What It Does |
|------|-------------|
| `search_contacts` | Search by name, email, phone, or tag |
| `get_contact` | Get full contact details and history |
| `create_contact` | Add a new lead with source, tags, property interest |
| `update_contact` | Update stage, tags, assignment |
| `add_note` | Log conversations, showing feedback, any context |
| `create_task` | Schedule follow-up calls, emails, showings |
| `list_tasks` | View upcoming and overdue tasks |
| `list_deals` | View pipeline deals and stages |
| `create_deal` | Add a deal to the pipeline |
| `log_call` | Record a call with notes and outcome |
| `list_users` | List all agents in your account |

## Resources

| Resource | Description |
|----------|------------|
| `fub://pipeline/stages` | All pipeline stages in your account |

## Prompts

| Prompt | Description |
|--------|------------|
| `daily-followup-plan` | Generate today's prioritized follow-up plan |
| `lead-summary` | Full summary of any contact with recommended next action |

## Installation

### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "followupboss": {
      "command": "npx",
      "args": ["-y", "followupboss-mcp"],
      "env": {
        "FOLLOWUPBOSS_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### Claude Code

Add to your project's `.mcp.json`:

```json
{
  "mcpServers": {
    "followupboss": {
      "command": "npx",
      "args": ["-y", "followupboss-mcp"],
      "env": {
        "FOLLOWUPBOSS_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### Get Your API Key

1. Log into Follow Up Boss
2. Go to **Admin** → **API**
3. Copy your API key
4. Paste it in the config above

## Example Usage

Once connected, just talk to Claude naturally:

- "Show me all leads from Zillow this week"
- "Create a follow-up task to call Sarah Chen tomorrow at 10am"
- "Add a note to John Smith: showed him 3 properties, liked the one on Oak St"
- "What's in my pipeline right now? Show me active deals"
- "Generate my follow-up plan for today"
- "Give me a full summary of the Martinez lead"

## Development

```bash
cd mcp-server
npm install
npm run build
npm start
```

Test with the MCP Inspector:
```bash
npm run inspect
```

## Rate Limits

Follow Up Boss allows 1,000 requests per 10 minutes. The server handles rate limiting gracefully and returns clear error messages if limits are hit.
