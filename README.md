Convert blobs to and from base64 data url strings.
Alternate of https://github.com/Xyfir/based-blob (DELETED somehow from both npm and github)

# Usage

```js
(async function() {
  const b = require('based-blob');

  const base64String = 'some base64 data...';

  const blob = b.toBlob(base64String);
  const b64s = await b.toBase64(blob);

  console.log(b64s == base64String); // true
})();
```

# API

## toBlob(base64[, contentType])

Converts a base64 data url string to a blob.

### Parameters

- `base64: string` - The string to convert.
- `contentType: string` - *Optional* - Used for the Blob constructor.

### Returns

`Blob` - The blob built from the base64 string.

# based-blob

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)
[![npm version](https://img.shields.io/npm/v/based-blob-js.svg)](https://www.npmjs.com/package/based-blob-js)
[![npm downloads](https://img.shields.io/npm/dw/based-blob-js.svg)](https://www.npmjs.com/package/based-blob-js)

Convert blobs to and from base64 data URL strings.

This project is written in TypeScript. The published package includes compiled JavaScript in `dist/` and TypeScript declaration files (`.d.ts`) so TypeScript-aware editors and consumers get correct typings.

## Quick Start

- Install: `npm install based-blob`
- Build (from source): `npm run build` (compiles `src/` → `dist/`)

## Usage (CommonJS)

```js
const { toBlob, toBase64 } = require('based-blob');

// toBlob expects raw base64 (no data: prefix)
const blob = toBlob('aGVsbG8=', 'text/plain');

(async () => {
  const dataUrl = await toBase64(blob);
  console.log(dataUrl); // data:text/plain;base64,aGVsbG8=
})();
```

## Usage (ES Module / TypeScript)

```ts
import { toBlob, toBase64 } from 'based-blob';

const blob = toBlob('aGVsbG8=', 'text/plain');
const dataUrl = await toBase64(blob);
```

## API

- `toBlob(base64: string, contentType?: string): Blob` — Create a `Blob` from a base64 string. Pass an optional `contentType` (MIME type).
- `toBase64(blob: Blob): Promise<string>` — Convert a `Blob` to a base64 data URL string (resolves to a string like `data:<type>;base64,<data>`).

## Notes

- If you have a full data URL (`data:<type>;base64,<data>`), strip the prefix before calling `toBlob` (e.g. `base64 = dataUrl.split(',')[1]`).
- Type definitions are emitted into `dist/` when building so TypeScript consumers get typings via the `types` field in `package.json`.

## Testing

- Run tests: `npm test` (Jest configured with a `jsdom` environment).

## Contributing

- Make changes in `src/`, run `npm run build`, and open a PR.

## License

MIT