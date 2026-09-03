# ESLint config for Prettier

## Installation

```sh
npm install -D @robinblomberg/eslint-config-prettier
```

## Configuration

Requires ESLint 9.x and Node's `require(esm)`/ESM support.

Create a file called **eslint.config.js** at the project root:

```js
import eslintConfigPrettier from '@robinblomberg/eslint-config-prettier';

export default [...eslintConfigPrettier];
```

If your project isn't set up for ESM (no `"type": "module"` in package.json), name the file **eslint.config.mjs** instead.
