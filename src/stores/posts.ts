import { ref } from 'vue'
import { defineStore } from 'pinia'
import * as api from '../api/index'


export const usePostsStore = defineStore('postsStore', () => {
  const posts = ref()
  const isLoading = ref(false)

  async function fetchPosts() {
    isLoading.value = true
    try {
      const { data } = await api.fetchPosts()
      posts.value = [...data.posts]
      console.log(posts.value)
    } 
    catch (error) {
      console.log(error)
    }
    isLoading.value = false
  }

  return { posts, isLoading, fetchPosts }
})
