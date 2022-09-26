export default {
  install(app) {
    Object.entries(import.meta.globEager('./icons/**/*.svg')).forEach(([path, m]) => {
      const name = path.replace('./icons/', '').replace('.svg', '').replace('/', '')
      app.component(`Icon${name}`, m.default)
    })
  }
}
