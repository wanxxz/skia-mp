import 'weapp-polyfill/auto-polyfill'
export { default as Root } from './root'
import CanvasKitInit from 'canvaskit-wasm/bin/canvaskit'

export async function init() {
  const CanvasKit = await CanvasKitInit({ locateFile: () => '/libs/canvaskit.wasm' })
  return CanvasKit
}
