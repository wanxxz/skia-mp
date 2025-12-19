const polyfills = require('./polyfills')

globalThis.TextEncoder = polyfills.TextEncoder
globalThis.TextDecoder = polyfills.TextDecoder

App({})
