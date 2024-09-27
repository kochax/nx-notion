import { ExecutorContext, output, PromiseExecutor } from "@nx/devkit";
import { NotionToMarkdown } from "notion-to-md";
import { ExportDbPagesOptionsSchema } from "./schema";
import path = require("path");
import { mkdir, writeFile } from "fs/promises";
import { notionClient } from "../../utils/client";
import { MarkdownExporter } from "../../utils/exporters/markdown-exporter";

const runExecutor: PromiseExecutor<ExportDbPagesOptionsSchema> = async (
  options: ExportDbPagesOptionsSchema,
  context: ExecutorContext
) => {
  output.log({
    title: `Runing ${context.targetName}: Starting... `,
    color: output.colors.green(),
  });

  const { results } = await notionClient.databases.query(
    options.databaseQueryOptions
  );

  if (!results || results.length === 0) {
    output.error({
      title: `No results found for query ${JSON.stringify(
        options.databaseQueryOptions
      )}`,
    });

    throw new Error("No results found");
  }

  switch (options.exportType) {
    case "md":
      const exporter = new MarkdownExporter(
        notionClient,
        results,
        options.outputDir
      );
      await exporter.export();
      break;
  }

  // Build summary
  // await writeFile(
  //   path.join(path.join(context.cwd, options.outputDir), "summary.json"),
  //   Buffer.from(JSON.stringify(results))
  // );

  return {
    success: true,
  };
};

export default runExecutor;
