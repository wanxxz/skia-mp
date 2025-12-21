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
          const ctx = canvas.getContext('webgl2')

          const getParameter = ctx.getParameter.bind(ctx)

          ctx.getParameter = function (v) {
            if (v === 7938) {
              const value = getParameter(v)
              if (value.indexOf('OpenGL ES 3.2') > 0) {
                return 'WebGL 2.0 (OpenGL ES 3.2 Chromium)'
              } else {
                return value
              }
            } else if (v === 35724) {
              const value = getParameter(v)
              if (value.indexOf('GLSL ES') < 0) {
                return 'WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.2 Chromium)'
              } else if (value.indexOf('OpenGL ES 3.2') > 0) {
                return 'WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.2 Chromium)'
              } else {
                return value
              }
            } else if (v === 3415) {
              return 0
            }
            return getParameter(v)
          }

          init().then(CanvasKit => {
            Root()
          })
        })
    }
  }
})
