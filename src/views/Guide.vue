<template>
  <t-layout>
    <t-aside>
      <el-affix :offset="0">
        <div class="train-menu-box">
          <t-menu theme="light" :default-value="$route.name" title="" height="550px" router>
            <t-menu-group v-for="group in menus.arr" :title="group.groupName">
              <t-menu-item v-for="menu in group.menuList" :value="menu.menuId" :to="parentPath+menu.path"> {{
                  menu.menuTitle
                }}
              </t-menu-item>
            </t-menu-group>
          </t-menu>
        </div>
      </el-affix>
    </t-aside>
    <t-content>
      <div class="content-box">
        <router-view></router-view>
      </div>
    </t-content>
  </t-layout>

</template>

<script setup lang="ts">

import {reactive} from "vue";

const parentPath = '/guide';

const menus = reactive({
  arr: [
    {
      groupName: '开始',
      menuList: [
        {menuId: 'guideIntro', menuTitle: '简介', path: '/intro'},
        {menuId: 'guideQuickStart', menuTitle: '快速上手', path: '/quick-start'},
        {menuId: 'bestExperience', menuTitle: '最佳实践', path: '/best-experience'},
        {menuId: 'changeLog', menuTitle: '更新日志', path: '/change-log'},
      ]
    },
    {
      groupName: '通用',
      menuList: [
        {
          menuId: '5',
          menuTitle: '登录'
        }
      ]
    },
  ]
});


</script>

<style lang="less" scoped>
.train-menu-box {
  //position: absolute;
  //top: 0;
  //bottom: 0;
  //left: 0;
  border-right: 1px solid rgba(60, 60, 60, .12);
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
}

.content-box {
  padding: 64px 64px 96px;
  background: #ffffff;
  width: 800px;
}
</style>
