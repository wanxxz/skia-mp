export { default as Root } from './root'

export function instantiate() {
  const path = '/libs/canvaskit.wasm'
  return WXWebAssembly.instantiate(path)
}
