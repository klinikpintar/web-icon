import type { Plugin, App } from 'vue';
import Icons from './index'

const createComponent = (
  app:App,
  name:string,
  alias:string,
  prefix:string = 'Icon',
  width?:string|number,
  height?:string|number,
  defaultClass?:string
)  => {
  if (!Icons[name]) { return }
  const icon = Icons[name]
  app.component(`${prefix}${alias}`, {
    props: {
      width: { type: [String, Number], default: width },
      height: { type: [String, Number], default: height }
    },
    render (_ctx:any, _cache:any) {
      const svg = icon.icon.render(_ctx, _cache)

      svg.props.width = this.width
      svg.props.height = this.height
      svg.props.class = defaultClass

      return svg
    }
  })
}

const plugin:Plugin = {
  install: ((app, options = {}) => {
    const prefix = options.prefix || 'Icon'
    const width = options.width
    const height = options.height
    const defaultClass = options.class || ''
    const aliases = options.alias || {}

    Object.keys(Icons).forEach((name) => {
      createComponent(app, name, name, prefix, width, height, defaultClass)
    })
    
    Object.keys(aliases).forEach((name) => {
      createComponent(app, aliases[name], name, prefix, width, height, defaultClass)
    })
  })
}

export default plugin