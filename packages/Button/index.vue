<template>
  <button
    :class="[
      'el-button',
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    :type="nativeType"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import type { PropType } from 'vue';

type IButtonNativeType = PropType<'button' | 'submit' | 'reset'>
type IButtonType = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'>

export default {
  name: 'x-button',
  props: {
    type: {
      type: String as IButtonType,
      default: 'default',
      validator: (val: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'danger',
          'text',
        ].includes(val)
      },
    },
    nativeType: {
      type: String as IButtonNativeType,
      default: 'button',
      validator: (val: string) => {
        return ['button', 'submit', 'reset'].includes(val)
      },
    },
  },
  setup() {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
  .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  .el-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  .el-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
  .el-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }
  .el-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
  .el-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
</style>