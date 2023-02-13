<template>
  <h1>BestExperience</h1>

  <FlexBox :model="queryForm">
      <a-form-item
          label="Username"
          name="username"
      >
        <a-input v-model:value="queryForm.username" />
      </a-form-item>
    <a-form-item
        label="empCode"
        name="empCode"
    >
      <a-input v-model:value="queryForm.empCode" />
    </a-form-item>
    <a-form-item
        label="visible"
        name="visible"
    >
      <a-input v-model:value="queryForm.visible" />
    </a-form-item>
  </FlexBox>
  <button-bar>
    <a-button type="primary">查询</a-button>
  </button-bar>



</template>

<script setup lang="ts">
import {reactive} from "vue";

const queryForm = reactive({
  username: '',
  empCode: '',
  visible: 1
})
</script>

<style lang="less" scoped>

</style>
