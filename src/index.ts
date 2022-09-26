import type { Icons as IconSet } from './index.d'
import * as Icons from './icons'

const icons:IconSet = {}
Object.keys(Icons).forEach((key) => {
    icons[key] = (Icons as any)[key]
})

export default icons
