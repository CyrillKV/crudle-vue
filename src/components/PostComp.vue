<script setup lang="ts">
defineProps(["post"])
</script>

<template>
  <div class="post-container">
    <p>{{ `Posted by ${post.userId}` }}</p>
    <p>{{ post.title }}</p>
    <p>{{ post.body }}</p>
    <div class="post-container__footer">
      <p>{{ `Reactions: ${post.reactions}` }}</p>
      <div class="post-container__tags">
        <span v-for="(tag, i) in post.tags" :key="i">{{ tag }}</span>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss">
.post-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  background-color: green;
}
.post-container__footer {
  display: flex;
}
</style>