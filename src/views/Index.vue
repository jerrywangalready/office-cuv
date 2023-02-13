<template>
  <t-content style="background: #fff;">
    <div style="position: relative;">
      <div>
        <section id="hero">
          <h1 class="tagline">
            <span class="accent">移动应用</span>
            <br>
            开发管理平台
          </h1>
          <p class="description">指南、避坑、辅助</p>
          <p>
          <t-button size="large" theme="success" @click="toHomePage">快速上手</t-button>

          </p>
        </section>
        <section>
        </section>
      </div>
    </div>
  </t-content>
  <t-footer>
    <div style="text-align: center">
      <p>中国电力科学研究院有限公司</p>
      <p>数字化工作部 建设与平台处</p>
    </div>
  </t-footer>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter()

const toHomePage = () => {
  router.push("/home")
}

</script>

<style lang="less" scoped>

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0 auto;

  .accent {
    color: rgb(14, 178, 149)
  }
}

#hero {
  padding: 96px 32px;
  text-align: center;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: rgba(60, 60, 60, .7);;
  transition: color .5s;
  font-size: 22px;
  margin: 24px auto 40px;
}
</style>
