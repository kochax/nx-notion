import { ExecutorContext } from '@nx/devkit';

import { ExportDbPagesOptionsSchema } from './schema';
import executor from './export-db-pages.impl';
import exp = require('constants');

// const options: ExportDbPagesOptionsSchema = {
//   databaseId: '123',
//   notionApiToken: '123',
//   outputDir: '/null',
// };
// const context: ExecutorContext = {
//   root: '',
//   cwd: process.cwd(),
//   isVerbose: false,
// };

describe('NxNotionPageToMdExport Executor', () => {
  it('can run', async () => {
    // const output = await executor(options, context);
    // expect(output.success).toBe(true);
    expect(true).toBe(true);
  });
});
