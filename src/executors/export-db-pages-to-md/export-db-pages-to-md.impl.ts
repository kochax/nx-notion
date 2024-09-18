import { ExecutorContext, PromiseExecutor } from "@nx/devkit";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { ExportDbPagesToMdOptionsSchema } from "./schema";
import path = require("path");
import { mkdir, writeFile } from "fs/promises";

const runExecutor: PromiseExecutor<ExportDbPagesToMdOptionsSchema> = async (
  options: ExportDbPagesToMdOptionsSchema,
  context: ExecutorContext
) => {
  console.log("Executor ran for export-from-database");

  const apiKey = process.env["NOTION_API_KEY"];

  if (!apiKey || apiKey === undefined || apiKey === null) {
    throw new Error("NOTION_API_KEY is required");
  }

  const notionClient = new Client({
    auth: apiKey,
  });

  const { results } = await notionClient.databases.query({
    database_id: options.databaseId,
    filter: {
      and: [
        {
          property: "Status",
          status: {
            equals: "Published",
          },
        },
      ],
    },
  });

  const n2m = new NotionToMarkdown({ notionClient });

  for (let i = 0; i < results.length; i++) {
    const page = results[i];
    const mdPage = await n2m.pageToMarkdown(page.id);
    const outPath = path.join(context.cwd, options.outputDir, page.id);

    const content = n2m.toMarkdownString(mdPage);

    await mkdir(outPath, { recursive: true });

    await Promise.all([
      writeFile(
        path.join(outPath, `${page.id}.md`),
        Buffer.from(content.parent)
      ),
      writeFile(
        path.join(outPath, `${page.id}.json`),
        Buffer.from(JSON.stringify(page))
      ),
    ]);
  }

  // Build summary

  await writeFile(
    path.join(path.join(context.cwd, options.outputDir), "summary.json"),
    Buffer.from(JSON.stringify(results))
  );

  return {
    success: true,
  };
};

export default runExecutor;
