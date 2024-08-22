import { ExecutorContext } from "@nx/devkit";

import { NxNotionPageToMdExportExecutorSchema } from "./schema";
import executor from "./export-db-pages-to-md.impl";

const options: NxNotionPageToMdExportExecutorSchema = {
  databaseId: "123",
  notionApiToken: "123",
  outputDir: "/null",
};
const context: ExecutorContext = {
  root: "",
  cwd: process.cwd(),
  isVerbose: false,
};

describe("NxNotionPageToMdExport Executor", () => {
  it("can run", async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
