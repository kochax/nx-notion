<p align="center">
    <a alt="Notion logo" href="https://www.notion.so" target="_blank" rel="noreferrer">
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-notion-logo-icon-download-in-svg-png-gif-file-formats--productivity-application-brand-apps-pack-logos-icons-8630396.png?f=webp&w=256" width="150" />
    </a>
</p>

<div align="center">

# Nx Notion

This repository is home to a library designed for managing various operations with Notion inside the NX workspace. The library includes a set of functions such as executors, builders, and more.

[![License](https://img.shields.io/github/license/kochax/nx-notion.svg?color=40bb12)](https://github.com/kochax/nx-notion/blob/master/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dm/%40kochax%2Fnx-notion)](https://www.npmjs.com/package/@kochax/nx-notion)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/kochax)
[![Star this repo](https://img.shields.io/github/stars/kochax/nx-notion?style=social)](https://github.com/kochax/nx-notion)

</div>

<!-- toc -->

- [Prerequisite](#prerequisite)
- [Installation](#installation)
- [Configuration](#configuration)
- [Executors](#executors)
  * [export-db-pages](#export-db-pages)
    + [Configuration](#configuration-1)
    + [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

<!-- tocstop -->

# Prerequisite

This module is based on Nx, you will need to [set up an Nx workspace](https://nx.dev/web/getting-started/getting-started) before you can use nx-notion.

```bash
npx create-nx-workspace@latest
```

# Installation

To install the library, run one of the following commands, depending of which package manager you are using:

NPM:

```bash
npm install @kochax/nx-notion -D
```

PNPM:

```bash
pnpm install @kochax/nx-notion -D
```

YARN:

```bash
yarn add @kochax/nx-notion -D
```

# Configuration

To configure the library, you need to provide a Notion API token. You can obtain this token from the [Notion Developer Portal](https://developers.notion.com/reference/create-a-token).

Token could be provided either via env variable `NX_NOTION_API_KEY` or by seting `notionApiKey` executor option

.env file:

```env
NX_NOTION_API_KEY="your_token"
```

executor options:

```json
"target": {
    "executor": "@kochax/nx-notion:<executor>",
    "options": {
        "notionApiKey": "your_token"
    }
}
```

# Executors

## export-db-pages

The `export-db-pages` executor is responsible for exporting pages from the database. The database can be queried by following the offical [NotionAPI](https://developers.notion.com/reference/post-database-query) database querying instructions. The executor is able to accept the same JSON format.

### Configuration
TBD

### Examples

1. Export all pages from given database

```json
"export-db-pages": {
    "executor": "@kochax/nx-notion:export-db-pages",
    "options": {
    "databaseQueryOptions": {
        "database_id": "123123123"
    },
    "outputDir": "/path/to/export"
    }
}
``` 

2. Export pages using the databse query

```json
"export-db-pages": {
    "executor": "@kochax/nx-notion:export-db-pages",
    "options": {
    "databaseQueryOptions": {
        "database_id": "123123123",
        "filter_properties": {
        "and": [
            {
                "property": "Done",
                "checkbox": {
                    "equals": true
                }
            },
            {
                "or": [
                    {
                        "property": "Tags",
                        "contains": "A"
                    },
                    {
                        "property": "Tags",
                        "contains": "B"
                    }
                ]
            }
        ]
        }
    },
    "outputDir": "/path/to/export"
    }
}
```

# Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

# License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
