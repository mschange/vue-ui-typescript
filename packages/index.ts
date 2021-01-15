import { App } from 'vue'
// 导入button组件
import XButton from './Button'

// 组件列表
const components = [
  XButton
]

// // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
// const install: any = (app: App): void => {
//   // 判断是否安装
//   if (install.installed) return
//   // 遍历注册全局组件
//   components.map(component => app.component(component.name, component))
// }

// const win: any = window;

// // 判断是否是直接引入文件
// if (typeof win !== 'undefined' && win.app) {
//   install(win.app)
// }

// export default {
//   // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
//   install,
//   // 以下是具体的组件列表
//   ...components
// }

export default (app: App) => {
  components.forEach(component => {
    /**
     * 如果使用 use.component(item.name, item) 会出现有的组件未export
     * 比如: FormItem组件未导出
     */
    app.component(component.name, component)
  })
}