# Klinikpintar Web Icons
Collection of svg icon file
[Documentation](https://klinikpintar.github.io/web-icon)

## Installation
```
npm i klinikpintar-web-icons
```
## Usage
All the icons are placed in `/src/icons` frolder, so you can find and use the svg file icon. But in modern application we usually treat svg as an component.
### Vite
In vite implementation make sure you have installed the svg autoloader `vite-svg-loader`, you can install it via npm too.
```
npm i vite-svg-loader
```
in `vite.config.ts` file you must register the svg loader
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
export default defineConfig({
  plugins: [vue(), svgLoader()]
})
```
Then you can use SVG file as Component, for `vue` example:
```vue
<script setup lang="ts">
import IconAdd from 'klinikpintar-web-icons/src/icons/Action/Add.svg'
</script>
<template>
    <IconAdd/>
</template>
```
### Vue Plugin
#### Register plugin
This package also include plugin for `vue` framework, on create application register plugin to vue.
#### Register plugin
```ts
import { createApp } from 'vue'
import App from './App.vue'
import Icons from './plugin.js'
const app = createApp(App).use(Icons, { ... })
app.mount('#app')
```
By registering vue pugins all icon are available to use anyware with prefix `Icon` by default.
```vue
<template>
    <IconAdd/>
    <IconDownload/>
</template>
```
#### Available options
- `prefix` component profix by default `Icon`
- `width` add width property to component
- `height`: add height property to component
- `class`: add class property to component
- `alias` Value is object of aliases, example { Plus: 'Add', Minus: 'Negative' }, so you can use `<IconPlus>` and `<IconMinus>` in template.
