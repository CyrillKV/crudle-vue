<template>
  <div class="search-bar">
    <input class="search-bar__input" type="search" placeholder="Search Crudle">
    <img class="search-bar__icon" src="../../assets/lense.svg">
  </div>
</template>

<style lang="scss">
.search-bar {
  position: relative;
}
.search-bar__input {
  height: 40px;
  width: 100%;
  border: 1px solid $bg-alt;
  border-radius: $radius;
  padding-left: 40px;
}
.search-bar__input:focus {
  outline: none;
  border-radius: $radius $radius 0 0;
  border: 1px solid $btn;
}
.search-bar__input:hover {
  border: 1px solid $btn;
}
.search-bar__input::placeholder {
  letter-spacing: 0.01em;
  color: #768298;
}
.search-bar__icon{
  position: absolute;
  left: 14px;
  top: 12px;
  width: 16px;
  height: 16px;
}
.search-bar__icon:hover {
  cursor: pointer;
  transform: scale(1.08);
}
</style>