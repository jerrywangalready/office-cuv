<template>
  <div class="flex-box">
    <a-form
        :model="model"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
    >
      <div class="flex-box-inner">
        <slot></slot>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue";

defineProps<{
  model: object
}>()

const queryForm = reactive({
  username: '',
  empCode: '',
  visible: 1
})
</script>

<style>
.flex-box .ant-form-item {
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  float: left;
}
</style>

<style lang="less" scoped>
.flex-box {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 22px 10px 0 2px;
  margin-bottom: 10px;

  &-inner {
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    box-sizing: border-box;
  }
}

</style>
