#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// ============================================================
// Follow Up Boss MCP Server
// Connects Claude to Follow Up Boss CRM via their REST API
// Docs: https://docs.followupboss.com/reference/getting-started
// ============================================================

const API_KEY = process.env.FOLLOWUPBOSS_API_KEY;
if (!API_KEY) {
  console.error(
    "ERROR: FOLLOWUPBOSS_API_KEY environment variable is required.\n" +
      "Get your API key from Follow Up Boss → Admin → API",
  );
  process.exit(1);
}

const BASE_URL = "https://api.followupboss.com/v1";

// Basic auth: API key as username, blank password
const AUTH_HEADER = "Basic " + Buffer.from(`${API_KEY}:`).toString("base64");

// --- API Client -----------------------------------------------------------

interface FubRequestOptions {
  method?: string;
  path: string;
  params?: Record<string, string | number | boolean | undefined>;
  body?: unknown;
}

async function fubRequest<T = unknown>(opts: FubRequestOptions): Promise<T> {
  const url = new URL(`${BASE_URL}${opts.path}`);
  if (opts.params) {
    for (const [k, v] of Object.entries(opts.params)) {
      if (v !== undefined) url.searchParams.set(k, String(v));
    }
  }

  const res = await fetch(url.toString(), {
    method: opts.method ?? "GET",
    headers: {
      Authorization: AUTH_HEADER,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`FUB API ${res.status}: ${text}`);
  }

  return res.json() as Promise<T>;
}

// --- Response Helpers -----------------------------------------------------

function mcpSuccess(data: unknown) {
  return {
    content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
  };
}

function mcpError(error: unknown) {
  return {
    content: [
      {
        type: "text" as const,
        text: `Error: ${error instanceof Error ? error.message : String(error)}`,
      },
    ],
    isError: true as const,
  };
}

// --- MCP Server -----------------------------------------------------------

const server = new McpServer(
  {
    name: "followupboss-mcp",
    version: "1.0.0",
  },
  {
    instructions:
      "This server connects to Follow Up Boss CRM. Use search_contacts to find leads, " +
      "get_contact for details, create_contact for new leads, add_note to log interactions, " +
      "create_task to schedule follow-ups, and list_deals to view pipeline.",
  },
);

// --- TOOL: Search Contacts ------------------------------------------------

server.registerTool(
  "search_contacts",
  {
    title: "Search Contacts",
    description:
      "Search Follow Up Boss contacts by name, email, phone, or tag. Returns matching people with their details.",
    inputSchema: {
      query: z.string().describe("Search query — name, email, or phone"),
      limit: z.number().optional().default(20).describe("Max results (1-100)"),
      offset: z.number().optional().default(0).describe("Pagination offset"),
      sort: z
        .string()
        .optional()
        .describe("Sort field (e.g. 'created', 'lastActivity')"),
      tags: z.string().optional().describe("Filter by tag name"),
    },
    annotations: {
      destructiveHint: false,
      idempotentHint: true,
    },
  },
  async ({ query, limit, offset, sort, tags }) => {
    try {
      const data = await fubRequest<{ people: unknown[]; _metadata: unknown }>({
        path: "/people",
        params: { search: query, limit, offset, sort, tag: tags },
      });
      return mcpSuccess(data.people);
    } catch (error) {
      return mcpError(error);
    }
  },
);

// --- TOOL: Get Contact Details --------------------------------------------

server.registerTool(
  "get_contact",
  {
    title: "Get Contact Details",
    description:
      "Get full details for a specific contact by their Follow Up Boss ID, including all fields, tags, and activity history.",
    inputSchema: {
      contactId: z.number().describe("Follow Up Boss contact/person ID"),
    },
    annotations: { destructiveHint: false, idempotentHint: true },
  },
  async ({ contactId }) => {
    try {
      return mcpSuccess(await fubRequest({ path: `/people/${contactId}` }));
    } catch (error) {
      return mcpError(error);
    }
  },
);

// --- TOOL: Create Contact -------------------------------------------------

server.registerTool(
  "create_contact",
  {
    title: "Create Contact",
    description:
      "Create a new contact/lead in Follow Up Boss. Provide at least a name and one contact method (email or phone).",
    inputSchema: {
      firstName: z.string().describe("First name"),
      lastName: z.string().describe("Last name"),
      emails: z
        .array(z.object({ value: z.string(), type: z.string().optional() }))
        .optional()
        .describe("Email addresses — [{value, type}]"),
      phones: z
        .array(z.object({ value: z.string(), type: z.string().optional() }))
        .optional()
        .describe("Phone numbers — [{value, type}]"),
      source: z
        .string()
        .optional()
        .describe("Lead source (e.g. 'Zillow', 'Website', 'Referral')"),
      stage: z.string().optional().describe("Pipeline stage"),
      tags: z.array(z.string()).optional().describe("Tags to apply"),
      assignedTo: z
        .number()
        .optional()
        .describe("User ID to assign the contact to"),
      properties: z
        .object({
          street: z.string().optional(),
          city: z.string().optional(),
          state: z.string().optional(),
          zip: z.string().optional(),
          price: z.number().optional(),
          mlsNumber: z.string().optional(),
          type: z.string().optional(),
          bedrooms: z.number().optional(),
          bathrooms: z.number().optional(),
        })
        .optional()
        .describe("Property interest details"),
    },
    annotations: { destructiveHint: false, idempotentHint: false },
  },
  async ({
    firstName,
    lastName,
    emails,
    phones,
    source,
    stage,
    tags,
    assignedTo,
    properties,
  }) => {
    try {
      const body: Record<string, unknown> = { firstName, lastName };
      if (emails) body.emails = emails;
      if (phones) body.phones = phones;
      if (source) body.source = source;
      if (stage) body.stage = stage;
      if (tags) body.tags = tags;
      if (assignedTo) body.assignedTo = assignedTo;
      if (properties) body.properties = [properties];
      return mcpSuccess(
        await fubRequest({ method: "POST", path: "/people", body }),
      );
    } catch (error) {
      return mcpError(error);
    }
  },
);

// --- TOOL: Update Contact -------------------------------------------------

server.registerTool(
  "update_contact",
  {
    title: "Update Contact",
    description: "Update an existing contact's information in Follow Up Boss.",
    inputSchema: {
      contactId: z.number().describe("Contact ID to update"),
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      stage: z.string().optional().describe("Pipeline stage"),
      tags: z.array(z.string()).optional().describe("Tags (replaces existing)"),
      assignedTo: z.number().optional().describe("Reassign to user ID"),
    },
    annotations: { destructiveHint: false, idempotentHint: true },
  },
  async ({ contactId, ...fields }) => {
    try {
      const body = Object.fromEntries(
        Object.entries(fields).filter(([, v]) => v !== undefined),
      );
      return mcpSuccess(
        await fubRequest({ method: "PUT", path: `/people/${contactId}`, body }),
      );
    } catch (error) {
      return mcpError(error);
    }
  },
);

// --- TOOL: Add Note -------------------------------------------------------

server.registerTool(
  "add_note",
  {
    title: "Add Note",
    description:
      "Add a note to a contact in Follow Up Boss. Use for logging conversations, showing feedback, or any important context.",
    inputSchema: {
      personId: z.number().describe("Contact/person ID"),
      subject: z.string().describe("Note subject/title"),
      body: z
        .string()
        .describe("Note content — full text of the interaction or information"),
      isHtml: z
        .boolean()
        .optional()
        .default(false)
        .describe("Is the body HTML formatted?"),
    },
    annotations: { destructiveHint: false, idempotentHint: false },
  },
  async ({ personId, subject, body, isHtml }) => {
    try {
      return mcpSuccess(
        await fubRequest({
          method: "POST",
          path: "/notes",
          body: { personId, subject, body, isHtml },
        }),
      );
    } catch (error) {
      return mcpError(error);
    }
  },
);

// --- TOOL: Create Task ----------------------------------------------------

server.registerTool(
  "create_task",
  {
    title: "Create Task",
    description:
      "Create a follow-up task in Follow Up Boss. Schedule calls, emails, showings, or any to-do item linked to a contact.",
    inputSchema: {
      personId: z.number().describe("Contact/person ID the task is for"),
      name: z
        .string()
        .describe("Task description (e.g. 'Call about showing at 123 Oak St')"),
      dueDate: z.string().describe("Due date in YYYY-MM-DD format"),
      assignedTo: z.number().optional().describe("User ID to assign task to"),
      type: z
        .string()
        .optional()
        .describe("Task type: 'call', 'email', 'text', 'todo', 'showing'"),
    },
    annotations: { destructiveHint: false, idempotentHint: false },
  },
  async ({ personId, name, dueDate, assignedTo, type }) => {
    try {
      const body: Record<string, unknown> = { personId, name, dueDate };
      if (assignedTo) body.assignedTo = assignedTo;
      if (type) body.type = type;
      return mcpSuccess(
        await fubRequest({ method: "POST", path: "/tasks", body }),
      );
    } catch (error) {
      return mcpError(error);
    }
  },
);

// --- TOOL: List Tasks -----------------------------------------------------

server.registerTool(
  "list_tasks",
  {
    title: "List Tasks",
    description:
      "List upcoming tasks from Follow Up Boss. Filter by contact, assignee, or date range.",
    inputSchema: {
      personId: z.number().optional().describe("Filter by contact ID"),
      assignedTo: z.number().optional().describe("Filter by assigned user ID"),
      status: z
        .enum(["pending", "completed"])
        .optional()
        .describe("Filter by status"),
      limit: z.number().optional().default(20),
    },
    annotations: { destructiveHint: false, idempotentHint: true },
  },
  async ({ personId, assignedTo, status, limit }) => {
    try {
      const data = await fubRequest<{ tasks: unknown[] }>({
        path: "/tasks",
        params: { personId, assignedTo, status, limit },
      });
      return mcpSuccess(data.tasks);
    } catch (error) {
      return mcpError(error);
    }
  },
);

// --- TOOL: List Deals / Pipeline ------------------------------------------

server.registerTool(
  "list_deals",
  {
    title: "List Deals",
    description:
      "List deals/transactions from the Follow Up Boss pipeline. See active deals, stages, and values.",
    inputSchema: {
      personId: z.number().optional().describe("Filter by contact ID"),
      stage: z.string().optional().describe("Filter by pipeline stage"),
      limit: z.number().optional().default(20),
    },
    annotations: { destructiveHint: false, idempotentHint: true },
  },
  async ({ personId, stage, limit }) => {
    try {
      const data = await fubRequest<{ deals: unknown[] }>({
        path: "/deals",
        params: { personId, stage, limit },
      });
      return mcpSuccess(data.deals);
    } catch (error) {
      return mcpError(error);
    }
  },
);

// --- TOOL: Create Deal ----------------------------------------------------

server.registerTool(
  "create_deal",
  {
    title: "Create Deal",
    description:
      "Create a new deal/transaction in the Follow Up Boss pipeline for a contact.",
    inputSchema: {
      personId: z.number().describe("Contact ID"),
      name: z.string().describe("Deal name (e.g. '123 Oak St - Buyer')"),
      dealValue: z.number().optional().describe("Deal value in dollars"),
      stage: z.string().optional().describe("Pipeline stage"),
      expectedCloseDate: z
        .string()
        .optional()
        .describe("Expected close date YYYY-MM-DD"),
    },
    annotations: { destructiveHint: false, idempotentHint: false },
  },
  async ({ personId, name, dealValue, stage, expectedCloseDate }) => {
    try {
      const body: Record<string, unknown> = { personId, name };
      if (dealValue) body.dealValue = dealValue;
      if (stage) body.stage = stage;
      if (expectedCloseDate) body.expectedCloseDate = expectedCloseDate;
      return mcpSuccess(
        await fubRequest({ method: "POST", path: "/deals", body }),
      );
    } catch (error) {
      return mcpError(error);
    }
  },
);

// --- TOOL: Log Call -------------------------------------------------------

server.registerTool(
  "log_call",
  {
    title: "Log Call",
    description:
      "Log a phone call to a contact in Follow Up Boss with notes about the conversation.",
    inputSchema: {
      personId: z.number().describe("Contact ID"),
      note: z.string().describe("Call notes — what was discussed"),
      outcome: z
        .enum([
          "connected",
          "no answer",
          "left voicemail",
          "wrong number",
          "busy",
        ])
        .optional()
        .describe("Call outcome"),
      duration: z.number().optional().describe("Call duration in seconds"),
    },
    annotations: { destructiveHint: false, idempotentHint: false },
  },
  async ({ personId, note, outcome, duration }) => {
    try {
      const body: Record<string, unknown> = { personId, note };
      if (outcome) body.outcome = outcome;
      if (duration) body.duration = duration;
      return mcpSuccess(
        await fubRequest({ method: "POST", path: "/calls", body }),
      );
    } catch (error) {
      return mcpError(error);
    }
  },
);

// --- TOOL: List Users (Agents) --------------------------------------------

server.registerTool(
  "list_users",
  {
    title: "List Users",
    description:
      "List all users/agents in the Follow Up Boss account. Useful for assigning contacts and tasks.",
    inputSchema: {},
    annotations: { destructiveHint: false, idempotentHint: true },
  },
  async () => {
    try {
      const data = await fubRequest<{ users: unknown[] }>({ path: "/users" });
      return mcpSuccess(data.users);
    } catch (error) {
      return mcpError(error);
    }
  },
);

// --- RESOURCE: Pipeline Stages --------------------------------------------

server.registerResource(
  "pipeline-stages",
  "fub://pipeline/stages",
  {
    title: "Pipeline Stages",
    description: "All pipeline stages configured in Follow Up Boss",
    mimeType: "application/json",
  },
  async (uri) => {
    const data = await fubRequest({ path: "/stages" });
    return {
      contents: [{ uri: uri.href, text: JSON.stringify(data, null, 2) }],
    };
  },
);

// --- PROMPT: Daily Follow-Up Plan -----------------------------------------

server.registerPrompt(
  "daily-followup-plan",
  {
    title: "Daily Follow-Up Plan",
    description:
      "Generate today's follow-up plan — overdue tasks, hot leads, and priority actions",
  },
  () => ({
    messages: [
      {
        role: "user" as const,
        content: {
          type: "text" as const,
          text:
            "List my pending tasks, then check for any contacts with recent activity in the last 48 hours. " +
            "Create a prioritized follow-up plan for today with:\n" +
            "1. Overdue tasks (do these first)\n" +
            "2. Hot leads (recent activity)\n" +
            "3. Scheduled follow-ups for today\n" +
            "For each item, suggest the specific action and draft the message.",
        },
      },
    ],
  }),
);

// --- PROMPT: Lead Summary -------------------------------------------------

server.registerPrompt(
  "lead-summary",
  {
    title: "Lead Summary",
    description:
      "Get a comprehensive summary of a lead's history and recommended next steps",
    argsSchema: {
      contactName: z.string().describe("Name of the contact to look up"),
    },
  },
  ({ contactName }) => ({
    messages: [
      {
        role: "user" as const,
        content: {
          type: "text" as const,
          text:
            `Search for "${contactName}" in Follow Up Boss and give me a complete summary:\n` +
            "1. Contact details and source\n" +
            "2. All notes and interaction history\n" +
            "3. Current pipeline stage and deals\n" +
            "4. Pending tasks\n" +
            "5. Lead temperature assessment (hot/warm/cold)\n" +
            "6. Recommended next action with draft message",
        },
      },
    ],
  }),
);

// --- Start Server ---------------------------------------------------------

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Follow Up Boss MCP server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
