const { init } = require('../libs/app')

Component({
  lifetimes: {
    ready() {
      const query = this.createSelectorQuery()
      query
        .select('#root')
        .node()
        .exec(res => {
          const canvas = res[0].node
          const ctx = canvas.getContext('webgl2')

          init(canvas).then(CanvasKit => {
            globalThis.CanvasKit = CanvasKit
          })
        })
    }
  }
})
