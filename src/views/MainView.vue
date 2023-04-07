<script setup lang="ts">
import { onBeforeMount } from "vue"
import { usePostsStore } from "@/stores/posts"

import PostComp from "@/components/PostComp.vue"

const postsStore = usePostsStore()

onBeforeMount(() => {
  postsStore.fetchPosts()
})

</script>

<template>
  <h1 v-if="postsStore.isLoading"> LOADING ... </h1>
  <div v-else class="main">
    <PostComp v-for="post in postsStore.posts" :post="post" :key="post.id"/>
  </div>
</template>

<style lang="scss">
.main {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px max(10px, max(20px, calc(50% - 620px)));
}
</style>