import { App } from 'vue'
// 导入button组件
import XButton from './Button'

// 组件列表
const components = [
  XButton
]

const install = function(app: App) {
  components.map(component => {
    app.component(component.name,component);
  })
}

export default install;

export {
  install,
  XButton
}