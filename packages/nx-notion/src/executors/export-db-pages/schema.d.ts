import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

export interface ExportDbPagesOptionsSchema {
  databaseQueryOptions: QueryDatabaseParameters;
  outputDir: string;
  exportType?: 'md' | 'json';
  notionApiKey?: string;
}
