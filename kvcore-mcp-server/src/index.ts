#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Docs: https://api.kvcore.com/v2

const API_TOKEN = process.env.KVCORE_API_TOKEN;
if (!API_TOKEN) {
  console.error(
    "ERROR: KVCORE_API_TOKEN environment variable is required.\n" +
      "Get your API key from kvCORE → Admin → API Settings",
  );
  process.exit(1);
}

const BASE_URL = "https://api.kvcore.com/v2";

const AUTH_HEADER = `Bearer ${API_TOKEN}`;

interface KvRequestOptions {
  method?: string;
  path: string;
  params?: Record<string, string | number | boolean | undefined>;
  body?: unknown;
}

async function kvRequest<T = unknown>(opts: KvRequestOptions): Promise<T> {
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
    throw new Error(`kvCORE API ${res.status}: ${text}`);
  }

  return res.json() as Promise<T>;
}

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

const server = new McpServer(
  {
    name: "kvcore-mcp",
    version: "1.0.0",
  },
  {
    instructions:
      "This server connects to kvCORE/BoldTrail CRM. Use search_contacts to find leads, " +
      "get_contact for full details, create_contact for new leads, update_contact to edit fields, " +
      "add_note to log interactions, list_leads to view the lead pipeline, assign_tag to label contacts, " +
      "and list_activities to review recent contact history.",
  },
);

server.registerTool(
  "search_contacts",
  {
    title: "Search Contacts",
    description:
      "Search kvCORE contacts by name, email, or phone. Returns matching contacts with their details.",
    inputSchema: {
      query: z.string().describe("Search query — name, email, or phone"),
      limit: z.number().optional().default(20).describe("Max results (1-100)"),
      page: z
        .number()
        .optional()
        .default(1)
        .describe("Page number for pagination"),
    },
    annotations: {
      destructiveHint: false,
      idempotentHint: true,
    },
  },
  async ({ query, limit, page }) => {
    try {
      const data = await kvRequest<{ data: unknown[]; meta: unknown }>({
        path: "/contacts",
        params: { search: query, limit, page },
      });
      return mcpSuccess(data.data);
    } catch (error) {
      return mcpError(error);
    }
  },
);

server.registerTool(
  "get_contact",
  {
    title: "Get Contact Details",
    description:
      "Get full details for a specific kvCORE contact by ID, including all fields, tags, and source information.",
    inputSchema: {
      contactId: z.string().describe("kvCORE contact ID"),
    },
    annotations: { destructiveHint: false, idempotentHint: true },
  },
  async ({ contactId }) => {
    try {
      return mcpSuccess(await kvRequest({ path: `/contacts/${contactId}` }));
    } catch (error) {
      return mcpError(error);
    }
  },
);

server.registerTool(
  "create_contact",
  {
    title: "Create Contact",
    description:
      "Create a new contact/lead in kvCORE. Provide at least a name and one contact method (email or phone).",
    inputSchema: {
      firstName: z.string().describe("First name"),
      lastName: z.string().describe("Last name"),
      email: z.string().optional().describe("Primary email address"),
      phone: z.string().optional().describe("Primary phone number"),
      source: z
        .string()
        .optional()
        .describe("Lead source (e.g. 'Zillow', 'Website', 'Referral')"),
      tags: z
        .array(z.string())
        .optional()
        .describe("Tags to apply to the contact"),
    },
    annotations: { destructiveHint: false, idempotentHint: false },
  },
  async ({ firstName, lastName, email, phone, source, tags }) => {
    try {
      const body: Record<string, unknown> = {
        first_name: firstName,
        last_name: lastName,
      };
      if (email) body.email = email;
      if (phone) body.phone = phone;
      if (source) body.source = source;
      if (tags) body.tags = tags;
      return mcpSuccess(
        await kvRequest({ method: "POST", path: "/contacts", body }),
      );
    } catch (error) {
      return mcpError(error);
    }
  },
);

server.registerTool(
  "update_contact",
  {
    title: "Update Contact",
    description: "Update an existing kvCORE contact's information by ID.",
    inputSchema: {
      contactId: z.string().describe("Contact ID to update"),
      firstName: z.string().optional().describe("First name"),
      lastName: z.string().optional().describe("Last name"),
      email: z.string().optional().describe("Primary email address"),
      phone: z.string().optional().describe("Primary phone number"),
      source: z.string().optional().describe("Lead source"),
      tags: z
        .array(z.string())
        .optional()
        .describe("Tags to apply (replaces existing tags)"),
    },
    annotations: { destructiveHint: false, idempotentHint: true },
  },
  async ({ contactId, firstName, lastName, email, phone, source, tags }) => {
    try {
      const raw: Record<string, unknown> = {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        source,
        tags,
      };
      const body = Object.fromEntries(
        Object.entries(raw).filter(([, v]) => v !== undefined),
      );
      return mcpSuccess(
        await kvRequest({
          method: "PUT",
          path: `/contacts/${contactId}`,
          body,
        }),
      );
    } catch (error) {
      return mcpError(error);
    }
  },
);

server.registerTool(
  "add_note",
  {
    title: "Add Note",
    description:
      "Add a note to a kvCORE contact. Use for logging calls, showings, conversations, or any relevant context.",
    inputSchema: {
      contactId: z.string().describe("Contact ID to add the note to"),
      note: z
        .string()
        .describe("Note content — full text of the interaction or information"),
    },
    annotations: { destructiveHint: false, idempotentHint: false },
  },
  async ({ contactId, note }) => {
    try {
      return mcpSuccess(
        await kvRequest({
          method: "POST",
          path: `/contacts/${contactId}/notes`,
          body: { note },
        }),
      );
    } catch (error) {
      return mcpError(error);
    }
  },
);

server.registerTool(
  "list_leads",
  {
    title: "List Leads",
    description:
      "List leads from kvCORE. Filter by source or date range to focus on specific segments.",
    inputSchema: {
      source: z.string().optional().describe("Filter by lead source"),
      dateFrom: z
        .string()
        .optional()
        .describe("Start date filter in YYYY-MM-DD format"),
      dateTo: z
        .string()
        .optional()
        .describe("End date filter in YYYY-MM-DD format"),
      limit: z.number().optional().default(20).describe("Max results"),
      page: z.number().optional().default(1).describe("Page number"),
    },
    annotations: { destructiveHint: false, idempotentHint: true },
  },
  async ({ source, dateFrom, dateTo, limit, page }) => {
    try {
      const data = await kvRequest<{ data: unknown[]; meta: unknown }>({
        path: "/leads",
        params: { source, date_from: dateFrom, date_to: dateTo, limit, page },
      });
      return mcpSuccess(data.data);
    } catch (error) {
      return mcpError(error);
    }
  },
);

server.registerTool(
  "assign_tag",
  {
    title: "Assign Tag",
    description:
      "Add one or more tags to a kvCORE contact. Tags help segment and organize your database.",
    inputSchema: {
      contactId: z.string().describe("Contact ID to tag"),
      tags: z.array(z.string()).describe("List of tags to add to the contact"),
    },
    annotations: { destructiveHint: false, idempotentHint: false },
  },
  async ({ contactId, tags }) => {
    try {
      return mcpSuccess(
        await kvRequest({
          method: "POST",
          path: `/contacts/${contactId}/tags`,
          body: { tags },
        }),
      );
    } catch (error) {
      return mcpError(error);
    }
  },
);

server.registerTool(
  "list_activities",
  {
    title: "List Activities",
    description:
      "View recent activity for a kvCORE contact — emails, calls, texts, site visits, and system events.",
    inputSchema: {
      contactId: z.string().describe("Contact ID to retrieve activity for"),
      limit: z.number().optional().default(20).describe("Max results"),
      page: z.number().optional().default(1).describe("Page number"),
    },
    annotations: { destructiveHint: false, idempotentHint: true },
  },
  async ({ contactId, limit, page }) => {
    try {
      const data = await kvRequest<{ data: unknown[]; meta: unknown }>({
        path: `/contacts/${contactId}/activities`,
        params: { limit, page },
      });
      return mcpSuccess(data.data);
    } catch (error) {
      return mcpError(error);
    }
  },
);

server.registerPrompt(
  "daily-followup-plan",
  {
    title: "Daily Follow-Up Plan",
    description:
      "Generate today's follow-up priorities from kvCORE — contacts with no recent activity and new leads needing attention",
  },
  () => ({
    messages: [
      {
        role: "user" as const,
        content: {
          type: "text" as const,
          text:
            "Pull my leads from kvCORE and build a prioritized follow-up plan for today.\n" +
            "Use list_leads to get recent leads, then check list_activities for each to find last contact.\n" +
            "Organize the plan as:\n" +
            "1. New leads (created in last 24h) — respond within the hour\n" +
            "2. Leads with no activity in 3-7 days — re-engage now\n" +
            "3. Leads with no activity in 7+ days — nurture sequence\n" +
            "For each contact, suggest the specific outreach action and draft a short message.",
        },
      },
    ],
  }),
);

server.registerPrompt(
  "lead-summary",
  {
    title: "Lead Summary",
    description:
      "Search a kvCORE contact and generate a comprehensive summary with recommended next steps",
    argsSchema: {
      contactName: z
        .string()
        .describe("Name or email of the contact to look up"),
    },
  },
  ({ contactName }) => ({
    messages: [
      {
        role: "user" as const,
        content: {
          type: "text" as const,
          text:
            `Search for "${contactName}" in kvCORE and provide a complete lead summary:\n` +
            "1. Contact details — name, email, phone, lead source\n" +
            "2. Tags and segments currently applied\n" +
            "3. Recent activity log (last 10 events from list_activities)\n" +
            "4. All notes on file\n" +
            "5. Lead temperature assessment (hot/warm/cold) based on activity recency\n" +
            "6. Recommended next action with a draft outreach message",
        },
      },
    ],
  }),
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("kvCORE MCP server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
