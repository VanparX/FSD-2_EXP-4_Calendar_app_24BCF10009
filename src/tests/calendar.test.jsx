import { describe, expect, it } from "vitest";
import reducer, {
  addPost,
  deletePost,
  selectPost,
} from "../features/posts/postSlice";

describe("Calendar Post Management", () => {
  it("adds a new scheduled post", () => {
    const initialState = {
      posts: [],
      selectedPost: null,
    };

    const post = {
      id: 100,
      title: "Test Post",
      platform: "Instagram",
      start: new Date(2026, 7, 25, 10, 0),
      end: new Date(2026, 7, 25, 11, 0),
    };

    const state = reducer(initialState, addPost(post));

    expect(state.posts).toHaveLength(1);
    expect(state.posts[0].title).toBe("Test Post");
    expect(state.posts[0].platform).toBe("Instagram");
  });

  it("selects a scheduled post", () => {
    const post = {
      id: 101,
      title: "LinkedIn Post",
      platform: "LinkedIn",
      start: new Date(2026, 7, 26, 14, 0),
      end: new Date(2026, 7, 26, 15, 0),
    };

    const initialState = {
      posts: [post],
      selectedPost: null,
    };

    const state = reducer(initialState, selectPost(post));

    expect(state.selectedPost).toEqual(post);
  });

  it("deletes a scheduled post", () => {
    const post = {
      id: 102,
      title: "Facebook Campaign",
      platform: "Facebook",
      start: new Date(2026, 7, 27, 16, 0),
      end: new Date(2026, 7, 27, 17, 0),
    };

    const initialState = {
      posts: [post],
      selectedPost: post,
    };

    const state = reducer(initialState, deletePost(102));

    expect(state.posts).toHaveLength(0);
    expect(state.selectedPost).toBeNull();
  });
});