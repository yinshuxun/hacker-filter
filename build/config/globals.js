const argv = require('yargs').argv

const __MOCK__ = !!argv.mock

const globals = {
  __MOCK__
}

module.exports = globals
