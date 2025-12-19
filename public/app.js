const polyfills = require('./polyfills')

global.TextEncoder = polyfills.TextEncoder
global.TextDecoder = polyfills.TextDecoder

App({})
