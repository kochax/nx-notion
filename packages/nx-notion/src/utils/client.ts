import { Client } from "@notionhq/client";

const apiKey = process.env["NOTION_API_KEY"];

if (!apiKey || apiKey === undefined || apiKey === null) {
  throw new Error("NOTION_API_KEY is required");
}

export const notionClient = new Client({
  auth: apiKey,
});
