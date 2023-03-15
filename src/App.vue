<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue'
</script>

<template>
  <HeaderComp />
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.main {
  margin: 40px $layout-sides;
  background-color: $bg-main;
  padding: 40px;
}
</style>
