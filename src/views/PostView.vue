<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

import postsData from '../data/posts.json'

const route = useRoute()

const post = ref()
const { id } = route.params

onBeforeMount(() => {
  post.value = postsData.find(p => p.id === +id)
})
</script>

<template>
  <div class="post-container">
    <h3>{{ post.title }}</h3>
    <p>{{ post.creator }}</p>
    <p>{{ post.createdAt }}</p>
    <p>{{ post.message }}</p>
  </div>
</template>
