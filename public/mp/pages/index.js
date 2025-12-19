import { instantiate, Root } from '../libs/canvaskit'

Component({
  lifetimes: {
    attached() {
      const query = this.createSelectorQuery()
      query
        .select('#root')
        .node()
        .exec(res => {
          const canvas = res[0].node
          const gl = canvas.getContext('webgl')

          instantiate().then(CanvasKit => {
            global.CanvasKit = CanvasKit
            CanvasKit.MakeCanvasSurface(gl)
            Root()
          })
        })
    }
  }
})
