<!--
 * @Description: APP Root Page
 * @Version: 2.0
 * @Author: Miya
 * @Date: 2021-11-26 10:33:44
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 17:58:08
-->

<template>
  <div>
    11111111111111
  </div>
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