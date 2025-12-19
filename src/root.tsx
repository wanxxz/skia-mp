import { Canvas, Rect } from '@shopify/react-native-skia'

export default function Root() {
  return (
    <Canvas>
      <Rect x={0} y={0} width={50} height={50} color="lightblue" />
    </Canvas>
  )
}
