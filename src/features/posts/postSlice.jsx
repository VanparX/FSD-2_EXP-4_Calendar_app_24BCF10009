import { createSlice } from "@reduxjs/toolkit";

const defaultPosts = [
  {
    id: 1,
    title: "Instagram Campaign",
    platform: "Instagram",
    start: new Date(2026, 7, 12, 10, 0),
    end: new Date(2026, 7, 12, 11, 0),
  },
  {
    id: 2,
    title: "LinkedIn Article",
    platform: "LinkedIn",
    start: new Date(2026, 7, 15, 14, 0),
    end: new Date(2026, 7, 15, 15, 0),
  },
  {
    id: 3,
    title: "Facebook Promotion",
    platform: "Facebook",
    start: new Date(2026, 7, 20, 16, 0),
    end: new Date(2026, 7, 20, 17, 0),
  },
];

const loadPosts = () => {
  try {
    const savedPosts = localStorage.getItem("calendarPosts");

    if (!savedPosts) {
      return defaultPosts;
    }

    return JSON.parse(savedPosts).map((post) => ({
      ...post,
      start: new Date(post.start),
      end: new Date(post.end),
    }));
  } catch {
    return defaultPosts;
  }
};

const savePosts = (posts) => {
  localStorage.setItem("calendarPosts", JSON.stringify(posts));
};

const initialState = {
  posts: loadPosts(),
  selectedPost: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
      savePosts(state.posts);
    },

    selectPost: (state, action) => {
      state.selectedPost = action.payload;
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.id !== action.payload
      );

      if (state.selectedPost?.id === action.payload) {
        state.selectedPost = null;
      }

      savePosts(state.posts);
    },
  },
});

export const {
  addPost,
  selectPost,
  deletePost,
} = postSlice.actions;

export default postSlice.reducer;