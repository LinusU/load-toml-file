'use strict'

const parseToml = require('@iarna/toml/parse-string')
const fs = require('graceful-fs')
const stripBom = require('strip-bom')
const { promisify } = require('util')

const parse = (data) => parseToml(stripBom(data))

module.exports = async (filePath) => parse(await promisify(fs.readFile)(filePath, 'utf8'))
module.exports.sync = (filePath) => parse(fs.readFileSync(filePath, 'utf8'))
