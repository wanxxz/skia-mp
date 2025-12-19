import * as polyfills from './polyfills'

global.TextEncoder = polyfills.TextEncoder
global.TextDecoder = polyfills.TextDecoder

App({})
