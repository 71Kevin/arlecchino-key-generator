# arlecchino-key-generator

[![npm version](https://img.shields.io/npm/v/arlecchino-key-generator.svg)](https://www.npmjs.com/package/arlecchino-key-generator)
[![GitHub license](https://img.shields.io/github/license/71Kevin/arlecchino-key-generator)](https://github.com/71Kevin/arlecchino-key-generator/LICENSE)

A Node.js module for generating unique keys with the Arlecchino touch.

![RlhvODN0R1VjQUloMENDLXJlbW92ZWJnLXByZXZpZXc=](https://github.com/71Kevin/arlecchino-key-generator/assets/37316637/6f086956-87d8-4488-b664-7b56ad6d3d94)

## Installation

```
npm install arlecchino-key-generator
```

## Usage

### JavaScript

```javascript
const arle = require('arlecchino-key-generator');

// Generate a single key
console.log(arle.createHash());

// Generate multiple keys
console.log(arle.createManyHashes(100));

// Generate a custom key
console.log(arle.createCustomHash('Clorinde'));
```

## Description

Arlecchino Key Generator is a Node.js module designed to produce unique keys with a touch of Arlecchino's charm. It utilizes cryptographic functions to generate a random UUID, shuffles its characters, inserts the phrase "Arlecchino" in the middle, and then encodes a random 7-character substring of the resulting key using Base64 encoding.

## New Features

- `createHash()` Generates a unique key with "Arlecchino" characters.
- `createManyHashes(count)` Generates the specified number of unique keys.
- `createCustomHash(customString)` Generates a custom key with the specified string.

## Why Use This Module?

Idk, I created this module in my free time from work, use it if you're a Genshin player and a simp of Arlecchino like me lmao.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the ISC License - see the LICENSE file for details.
