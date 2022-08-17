<!--
 * @Description: Main Page
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-17 17:56:04
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 17:57:58
-->
<template>
  <div>
1111  </div>
</template>
<script lang="ts" setup>
import { provide, reactive } from 'vue'
const testData = reactive({
  test: 12345,
  name: 'test',
})
provide('testData', testData)
</script>
<style></style>