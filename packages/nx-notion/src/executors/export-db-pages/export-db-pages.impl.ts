/* eslint-disable no-case-declarations */
import { ExecutorContext, output, PromiseExecutor } from '@nx/devkit';
import { ExportDbPagesOptionsSchema } from './schema';
import { notionClientFactory } from '../../utils/client';
import { MarkdownExporter } from '../../utils/exporters/markdown-exporter';

const runExecutor: PromiseExecutor<ExportDbPagesOptionsSchema> = async (
  options: ExportDbPagesOptionsSchema,
  context: ExecutorContext
) => {
  output.log({
    title: `Runing ${context.targetName}: Starting... `,
    color: output.colors.green(),
  });

  const notionClient = notionClientFactory({ auth: options.notionApiKey });

  const { results } = await notionClient.databases.query(
    options.databaseQueryOptions
  );

  if (!results || results.length === 0) {
    output.error({
      title: `No results found for query ${JSON.stringify(
        options.databaseQueryOptions
      )}`,
    });

    throw new Error('No results found');
  }

  if (!options.exportType) {
    output.warn({
      title: `No export type specified, defaulting to 'md'`,
    });
    options.exportType = 'md';
  }

  switch (options.exportType) {
    case 'md':
      const exporter = new MarkdownExporter(
        context,
        notionClient,
        results,
        options.outputDir
      );
      await exporter.export();
      break;
    default:
      throw new Error(`Not supported exporter ${options.exportType}`);
  }

  return {
    success: true,
  };
};

export default runExecutor;
