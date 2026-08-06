import { createSlice } from "@reduxjs/toolkit";

const savedPosts = JSON.parse(localStorage.getItem("posts"));

const initialState = {
  posts:
    savedPosts || [
      {
        id: 1,
        title: "Instagram Campaign",
        platform: "Instagram",
        start: new Date(2026, 7, 10, 10, 0),
        end: new Date(2026, 7, 10, 11, 0),
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
    ],

  selectedPost: null,

  filter: "All",

  search: "",
};

const savePosts = (posts) => {
  localStorage.setItem("posts", JSON.stringify(posts));
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

      savePosts(state.posts);
    },

    updatePost: (state, action) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );

      if (index !== -1) {
        state.posts[index] = action.payload;
      }

      savePosts(state.posts);
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  addPost,
  selectPost,
  deletePost,
  updatePost,
  setFilter,
  setSearch,
} = postSlice.actions;

export default postSlice.reducer;