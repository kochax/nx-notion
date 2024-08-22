import {
  PageObjectResponse,
  PartialPageObjectResponse,
  PartialDatabaseObjectResponse,
  DatabaseObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { Exporter } from './exporter';
import { NotionToMarkdown } from 'notion-to-md';
import { Client } from '@notionhq/client';
import { ExecutorContext } from '@nx/devkit';
import { mkdir, writeFile } from 'fs/promises';
import * as path from 'path';

export class MarkdownExporter extends Exporter {
  constructor(
    private context: ExecutorContext,
    private notionClient: Client,
    private results: (
      | PageObjectResponse
      | PartialPageObjectResponse
      | PartialDatabaseObjectResponse
      | DatabaseObjectResponse
    )[],
    private outputDir: string
  ) {
    super(context);
  }

  async export(): Promise<void> {
    const n2m = new NotionToMarkdown({ notionClient: this.notionClient });

    for (let i = 0; i < this.results.length; i++) {
      const page = this.results[i];
      const mdPage = await n2m.pageToMarkdown(page.id);
      const outPath = path.join(this.context.cwd, this.outputDir, page.id);

      const content = n2m.toMarkdownString(mdPage);

      await mkdir(outPath, { recursive: true });

      await Promise.all([
        writeFile(
          path.join(outPath, `${page.id}.md`),
          Buffer.from(content.parent)
        ),
      ]);
    }
  }
}
