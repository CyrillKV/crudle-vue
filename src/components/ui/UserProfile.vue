<script setup lang="ts">
import { ref } from 'vue'

const isExpanded = ref(false)

</script>

<template>
  <div class="profile-wrapper">
    <button @click="isExpanded = !isExpanded" class="profile">
      <img class="profile__image" src="../../assets/doggo.jpg" alt="profile avatar">
      <p class="profile__name">Username</p>
      <img class="profile__icon" src="../../assets/svg/angle-down-solid.svg">
    </button>
    <transition name="dropdown">
      <div v-show="isExpanded" class="dropdown-menu">
        <a class="dropdown__link" href="#">Link 1</a>
        <a class="dropdown__link" href="#">Link 2</a>
        <a class="dropdown__link" href="#">Link 3</a>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.profile-wrapper {
  position: relative;
}
.profile{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  padding: 3px;
  border: none;
  background: none;
  
  &:hover {
    cursor: pointer;
    border: 1px solid $bg-alt;
    padding: 2px;
  }
}
.profile__image {
  max-height: 40px;
  border-radius: 50%;
}
.profile__icon {
  margin-left: auto;
}

.dropdown-menu {
  position: absolute;
  top: 48px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 10px;
  width: 210px;
  background-color: $bg-main;
  z-index: 999;
}
.dropdown__link {
  text-decoration: none;
  color: $text;
  font-weight: bold;
}

//dropdown toggle styles
.dropdown-enter-from, .dropdown-leave-to {
  transform: translateY(-12px);
  opacity: 0;
}
.dropdown-enter-active, .dropdown-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>