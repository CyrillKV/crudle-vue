<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

import postsData from '../data/posts.json'

const posts = ref(postsData)

const router = useRouter()
</script>

<template>
  <div class="posts-container">
    <div 
    v-for="post in posts" 
    :key="post.id" 
    class="post"
    @click="router.push(`/post/${post.id}`)"
    >
      <h3>{{ post.title }}</h3>
      <p>{{ post.creator }}</p>
    </div>
  </div>
  <RouterLink to="/">Go Home</RouterLink>
</template>

<style scoped lang="scss">
.posts-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.post {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  min-width: 300px;
  height: 200px;

  background-color: grey;
  border: 1px solid black;

  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
}
</style>
