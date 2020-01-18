const assert = require('assert')
const loadTomlFile = require('.')

const expected = { foo: { bar: 'baz' } }

assert.deepStrictEqual(loadTomlFile.sync('foo.toml'), expected)

loadTomlFile('foo.toml').then((actual) => {
  assert.deepStrictEqual(actual, expected)
})
