import axios from 'axios';

const url = 'http://localhost:4002/posts'

export const fetchPosts = () => axios.get(url)