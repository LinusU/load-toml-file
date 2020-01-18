# Load TOML file

Read and parse a TOML file.

[Strips UTF-8 BOM](https://github.com/sindresorhus/strip-bom) and uses [`graceful-fs`](https://github.com/isaacs/node-graceful-fs).

## Installation

```sh
npm install --save load-toml-file
```

## Usage

```js
const loadTomlFile = require('load-toml-file')

loadTomlFile('foo.toml').then(data => {
  console.log(data)
  //=> { foo: { bar: 'baz' } }
})
```

## API

### loadTomlFile(filepath)

Returns a promise for the parsed TOML.

### loadTomlFile.sync(filepath)

Returns the parsed TOML.

## Related

- [load-yaml-file](https://github.com/LinusU/load-yaml-file) - Read and parse a YAML file
- [load-json-file](https://github.com/sindresorhus/load-json-file) - Read and parse a JSON file
