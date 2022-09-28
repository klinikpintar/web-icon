import type { Icons as IconSet } from './index.d'
import * as Icons from './icons'
const icons:IconSet = {}

Object.keys(Icons).forEach((group) => {
    Object.keys((Icons as any)[group]).forEach((name) => {
        icons[name] = { name, icon: (Icons as any)[group][name], group }
    })
})

export default icons
