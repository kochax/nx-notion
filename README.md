<p align="center">
    <a alt="Notion logo" href="https://www.notion.so" target="_blank" rel="noreferrer">
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-notion-logo-icon-download-in-svg-png-gif-file-formats--productivity-application-brand-apps-pack-logos-icons-8630396.png?f=webp&w=256" width="150" />
    </a>
</p>

<div align="center">

# Nx Notion

This repository is home to a library designed for managing various operations with Notion inside the NX workspace. The library includes a set of functions such as executors, builders, and more.

https://github.com/kochax/nx-notion

[![License](https://img.shields.io/github/license/kochax/nx-notion.svg?color=40bb12)](https://github.com/kochax/nx-notion/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/nx-electron.svg)](https://www.npmjs.com/package/nx-electron)
[![Downloads](https://img.shields.io/badge/downloads-500k+-respect)](https://npm-stat.com/charts.html?package=nx-electron&from=2019-11-01)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/kochax)
[![Star this repo](https://img.shields.io/github/stars/kochax/nx-notion?style=social)](https://github.com/kochax/nx-notion)

</div>

# Getting Started

## Prerequisite

This module is based on Nx, you will need to [set up an Nx workspace](https://nx.dev/web/getting-started/getting-started) before you can use nx-electron.

```bash
npx create-nx-workspace@latest
```

## Installation

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


## Configuration

To configure the library, you need to provide a Notion API token. You can obtain this token from the [Notion Developer Portal](https://developers.notion.com/reference/create-a-token).

Token could be provided either via env variable `NX_NOTION_API_KEY` or by seting `notionApiKey` executor option

## Executors

### export-db-pages
TBD

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
