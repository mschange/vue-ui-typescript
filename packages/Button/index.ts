import { App } from 'vue'
import XButton from './index.vue'

XButton.install = function(app: App) {
  app.component(XButton.name, XButton);
}

export default XButton;