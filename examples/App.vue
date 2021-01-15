<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button @click="handleClick">dsddasd</button>
  <x-button type="primary" @click="handleClickTest">主要按钮</x-button>&nbsp;&nbsp;
  <x-button type="success">成功按钮</x-button>&nbsp;&nbsp;
  <x-button type="info">信息按钮</x-button>&nbsp;&nbsp;
  <x-button type="warning">警告按钮</x-button>&nbsp;&nbsp;
  <x-button type="danger">危险按钮</x-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    
  },
  setup(props) {
    console.log(props)
    const handleClick = () => {
      alert('测试setup')
    }
    const handleClickTest = () => {
      console.log('点击了主要按钮')
    }
    return {
      handleClick,
      handleClickTest
    }
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
