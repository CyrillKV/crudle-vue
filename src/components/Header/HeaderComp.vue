<script setup lang="ts">
import HeaderLogo from './HeaderLogo.vue'
</script>

<template>
  <header class="header">
    <HeaderLogo />
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  height: 48px;
  background-color: $bg-main;
  box-shadow: $shadow;
}
</style>
