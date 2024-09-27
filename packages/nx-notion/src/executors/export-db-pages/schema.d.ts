import { Client } from "@notionhq/client";
import { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";

export interface ExportDbPagesOptionsSchema {
  databaseQueryOptions: QueryDatabaseParameters;
  exportType: 'md' | 'json';
  outputDir: string;
}
