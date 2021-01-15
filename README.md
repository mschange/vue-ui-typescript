# vue-ui-typescript

##
  使用vue3.0 + typescript搭建的组件库架子，可以上传npm进行使用(只具备组件库的架子，暂无实际项目使用效果)

### 安装
```
npm install vue-ui-typescript -D

```

### 在需要使用的项目中的main.ts中添加如下代码

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Tb from 'vue-ui-typescript'
import 'vue-ui-typescript/lib/vueUiTypescript.css'

const app = createApp(App)

app.use(store)
.use(router)
.use(Tb)
.mount('#app')


### 在shims-vue.d.ts添加

declare module 'vue-ui-typescript'




### 使用

<x-button type="primary" @click="handleClickTest">主要按钮</x-button>
<x-button type="success">成功按钮</x-button>
<x-button type="info">信息按钮</x-button>
<x-button type="warning">警告按钮</x-button>
<x-button type="danger">危险按钮</x-button>

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
