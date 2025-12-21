import 'weapp-polyfill/auto-polyfill'

import CanvasKitInit from 'canvaskit-wasm/bin/canvaskit'
export { default as Root } from './root'

export async function init() {
  const CanvasKit = await CanvasKitInit({ locateFile: () => '/libs/canvaskit.wasm' })
  return CanvasKit
}
