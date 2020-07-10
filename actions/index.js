import axios from 'axios';

export const types = {
  
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  
};

export const fetchPosts = () => ({ type: types.FETCH_POSTS });
