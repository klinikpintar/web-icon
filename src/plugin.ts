import type { Plugin } from 'vue';
import Icons from './index'

const plugin:Plugin = {
  install: ((app, options = {}) => {
    const prefix = options.prefix || 'Icon'
    const width = options.width
    const height = options.height
    const defaultClass = options.class || ''

    Object.keys(Icons).forEach((name) => {
      app.component(`${prefix}${name}`, {
        props: {
          width: { type: [String, Number], default: width },
          height: { type: [String, Number], default: height }
        },
        render (_ctx:any, _cache:any) {
          const svg = Icons[name].render(_ctx, _cache)

          svg.props.width = this.width
          svg.props.height = this.height
          svg.props.class = defaultClass

          return svg
        }
      })
    })
  })
}

export default plugin