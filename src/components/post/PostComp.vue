<script setup lang="ts">
import PostFooter from './PostFooter.vue'
defineProps(["post"])
</script>

<template>
  <div class="post">
    <div class="post__header">
      <p>{{ `Posted by ${post.userId}` }}</p>
      <p>3 hours ago</p>
      <div class="post__tags">
        <span v-for="(tag, i) in post.tags" :key="i">{{ tag }}</span>
      </div>
    </div>
    <div class="post__main">
      <p class="post__title">{{ post.title }}</p>
      <p class="post__body">{{ post.body }}</p>
    </div>
    <div class="post__footer">
      <PostFooter :reactions="post.reactions"/>
    </div>
    
  </div>
</template>

<style lang="scss">
.post {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  padding: 8px 12px 0;
  
  width: 100%;
  max-width: 800px;
  max-height: 360px;
  
  background-color: $bg-main;
  border: 1px solid $bg-alt;
  box-shadow: $shadow;
  border-radius: 5px;
  &:hover {
    border-color: $text-alt;
    cursor: pointer;
  }
}
.post__header {
  display: flex;
  gap: 6px;
  font-size: 0.8rem;
  color: $text-alt;
}
.post__main {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 12px;
}
.post__title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 6px 0;
}
.post__body {
  mask-image: linear-gradient(180deg,#000 60%,transparent);
}
.post__footer {
  display: flex;
  gap: 6px;
  color: $text-alt;
  & * {
    font-weight: bold;
  }
}
</style>