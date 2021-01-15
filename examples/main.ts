import { createApp } from 'vue'
import App from './App.vue'

// 导入组件库
import xui from '../packages'

const app = createApp(App);
// 注册组件库
app.use(xui);

app.mount('#app');
