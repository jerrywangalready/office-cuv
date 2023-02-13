<template>
    <div class="button-bar">
        <slot name="default"></slot>

        <slot name="search"></slot>
    </div>
</template>

<script>
    export default {
        name: 'Buttonbar'
    };
</script>

<style lang="less" scoped>
.button-bar {
  margin-bottom: 10px;
  text-align: right;
}
</style>
