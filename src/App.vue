<template>
  <t-layout>
    <t-header class="train-header">
      <div class="train-header-inner">
        <el-menu
            router
            :default-active="`/`+$route.path.split('/')[1]"
            class="train-el-menu"
            mode="horizontal"
            :ellipsis="false"
        >
          <el-menu-item index="0">
            <h2>移动应用开发管理平台</h2>
            <!--              <img width="136" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />-->
          </el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="/guide">指南</el-menu-item>
          <el-menu-item index="/home">组件</el-menu-item>
        </el-menu>
      </div>
    </t-header>
    <router-view></router-view>
  </t-layout>
</template>

<script setup lang="ts">
import {onMounted, onUpdated, ref} from "vue";
import {MenuValue} from "tdesign-vue-next";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute();

const menuValue = ref<string>()

const changeHandler = (active: MenuValue) => {
  console.log('change', active);

};

const toPage = (path: string) => {
  router.push(path)
  menuValue.value = path
}

onMounted(() => {

})
</script>

<style lang="scss">
/*.logo {*/
/*  height: 6em;*/
/*  padding: 1.5em;*/
/*  will-change: filter;*/
/*}*/
/*.logo:hover {*/
/*  filter: drop-shadow(0 0 2em #646cffaa);*/
/*}*/
/*.logo.vue:hover {*/
/*  filter: drop-shadow(0 0 2em #42b883aa);*/
/*}*/

* {
  padding: 0;
  margin: 0;
}

html, body, #app {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.train-header {
  box-shadow: inset 0 -1px 0 #e7e7e7;
  position: relative;
  z-index: 1000;
  padding: 2px;

  &-inner {
    padding: 0 24px;
    height: 100%;
    //    display: flex;
    //    justify-content: space-between;
    //    align-items: center;
    //    box-sizing: border-box;
    //    max-width: 100%;
    //    margin: auto;
    //    transition: all 0.25s var(--anim-time-fn-easing);
  }

  .train-el-menu {
    border: 0;
    background: none;
  }
}

.flex-grow {
  flex-grow: 1;
}

</style>
