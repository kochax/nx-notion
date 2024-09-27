# NX Notion

<a alt="Notion logo" href="https://www.notion.so" target="_blank" rel="noreferrer"><img src="https://cdn.iconscout.com/icon/free/png-256/free-notion-logo-icon-download-in-svg-png-gif-file-formats--productivity-application-brand-apps-pack-logos-icons-8630396.png?f=webp&w=256" width="45"></a>


This repository is home to a library designed for managing various operations with Notion inside the NX workspace. The library includes a set of functions such as executors, builders, and more.

## Installation

To install the library, use npm:

```bash
npm install your-library-name
```

## Usage

To use the library, import the necessary functions into your project:

```javascript
import { yourFunction } from 'your-library-name';

// Example usage
yourFunction();
```

## Configuration

To configure the library, you need to provide a Notion API token. You can obtain this token from the [Notion Developer Portal](https://developers.notion.com/reference/create-a-token).

```json
{
    "notionApiToken": {
        "type": "string",
        "description": "Notion API token. See more: https://developers.notion.com/reference/create-a-token"
    }
}
```

## Functions

### `yourFunction`

Description of what `yourFunction` does.

```javascript
yourFunction(param1, param2);
```

- `param1`: Description of the first parameter.
- `param2`: Description of the second parameter.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
