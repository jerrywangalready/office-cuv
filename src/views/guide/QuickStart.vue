<template>
  <h1>QuickStart</h1>

</template>

<script setup lang="ts">
import {DiscountIcon, RectangleIcon, ChevronDownIcon, ChevronUpIcon} from 'tdesign-icons-vue-next'
import {IconFont} from 'tdesign-icons-vue-next';
import {MessagePlugin} from "tdesign-vue-next";
import {ref} from "vue";

const toDownload = () => {
  let url = currentAndroidDownloadOption.value.url;
  window.open(url)
}

const androidDownloadOptions = [
  {
    content: '64位',
    value: 1,
    url: 'https://dldir1.qq.com/wework/weworklocalapp/UlUyP3E6xaFeeCajxYF0-Dq7AibhxbouZvz6FIDkofg/sgccigw_uat_sgitgdev-uat_android_release_64bit_2.7.93000.51140.apk'
  },
  {
    content: '32位',
    value: 2,
    url: 'https://dldir1.qq.com/wework/weworklocalapp/UlUyP3E6xaFeeCajxYF0-Dq7AibhxbouZvz6FIDkofg/sgccigw_uat_sgitgdev-uat_android_release_32bit_2.7.93000.51139.apk'
  }
];

type androidDownloadOptionsType = {
  content: string
  value: string
  url: string
}

const currentAndroidDownloadOption = ref<androidDownloadOptionsType>(androidDownloadOptions[0])

const clickHandler = (data: androidDownloadOptionsType) => {
  currentAndroidDownloadOption.value = data;
};

</script>

<style lang="less" scoped>
.my-download-button {

  button {
    padding: 10px 17px;
    border: 0;
    background: #0052d9;
    color: #ffffff;
    cursor: pointer;
  }

  &-left {
    border-radius: 17px 0 0 17px;
  }

  &-right {
    margin-left: 1px;
    border-radius: 0 17px 17px 0;

    svg {
      margin-left: 10px;
      margin-top: -2px;
      font-size: 16px;
    }
  }
}
</style>
