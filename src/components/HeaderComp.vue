<script setup lang="ts">
import AppLogo from './ui/AppLogo.vue'
import SearchBar from './ui/SearchBar.vue'
import LoginButton from './ui/LoginButton.vue'
import UserProfile from './ui/UserProfile.vue'

import { ref } from 'vue'

const isLoggedIn = ref(true)
</script>

<template>
  <header class="header">
    <AppLogo />
    <SearchBar class="header__search-bar"/>
    <LoginButton v-if="!isLoggedIn" class="header__login-btn"/>
    <UserProfile v-else class="header__profile"/>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 48px;
  padding: 4px 40px;
  background-color: $bg-main;
  box-shadow: $shadow;
}
.header__search-bar {
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
}
.header__login-btn{
  height: 40px;
  width: 80px;
  border: none;
  font-weight: bold;
}
.header__login-btn:hover {
  color: $btn;
  background-color: $bg-main;
  border: 1px solid $btn;
}
.header__profile {
  max-width: 210px;
}
</style>
