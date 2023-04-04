<template>
  <div class="profile">
    <img class="profile__image" src="../../assets/doggo.jpg" alt="profile avatar">
    <p class="profile__name">Username</p>
  </div>
</template>

<style lang="scss">
.profile{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  padding: 2px;
}
.profile__image {
  max-height: 36px;
  border-radius: 50%;
}
.profile:hover{
  cursor: pointer;
  border: 1px solid $bg-alt;
  margin: 0 -1px;
}
</style>