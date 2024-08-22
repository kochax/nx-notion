import { Client } from '@notionhq/client';
import { CONSTANTS } from './constants';
import { ClientOptions } from '@notionhq/client/build/src/Client';

export const notionClientFactory = (options?: ClientOptions) => {
  const apiKey = process.env[CONSTANTS.NX_NOTION_API_KEY] || options?.auth;

  if (!apiKey || apiKey === undefined || apiKey === null) {
    throw new Error(
      `Notion API key was not provided. You can set it via env variable ${CONSTANTS.NX_NOTION_API_KEY} or 'notionApiKey' option`
    );
  }

  return new Client({
    ...options,
    auth: apiKey,
  });
};
