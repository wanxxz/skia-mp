const { init, Root } = require('../libs/canvaskit')

Component({
  lifetimes: {
    ready() {
      const query = this.createSelectorQuery()
      query
        .select('#root')
        .node()
        .exec(res => {
          const canvas = res[0].node
          const gl = canvas.getContext('webgl')

          init().then(() => {
            Root()
          })
        })
    }
  }
})
