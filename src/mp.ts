export { default as Root } from './root'

export async function instantiate() {
  const path = './canvaskit.wasm'
  const imports = {}
  const instance = await WXWebAssembly.instantiate(path, imports)
  const wasm = instance.exports
  return wasm
}
