import axios from 'axios'

const API = axios.create({ baseURL: 'https://dummyjson.com' });

export const fetchPosts = (limit:Number = 5, skip:Number = 0) => API.get(`/posts?limit=${limit}&skip=${skip}`);