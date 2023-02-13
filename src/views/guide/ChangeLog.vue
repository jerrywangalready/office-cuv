<template>
  <h1>ChangeLog</h1>

</template>

<script setup lang="ts">
import {ref} from "vue";

const layout = ref('vertical');
const options = [
  {
    label: '2022-01-01',
    content: '1.4',
  },
  {
    label: '2022-02-01',
    content: '1.3',
  },
  {
    label: '2022-03-01',
    content: '1.2',
  },
  {
    label: '2022-04-01',
    content: '1.1',
  },
];
</script>

<style lang="less" scoped>
.detail-item {

}
</style>
