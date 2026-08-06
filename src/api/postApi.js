const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let posts = [
  {
    id: 1,
    title: "Instagram Campaign",
    start: new Date(2026, 7, 10, 10, 0),
    end: new Date(2026, 7, 10, 11, 0),
  },
  {
    id: 2,
    title: "LinkedIn Article",
    start: new Date(2026, 7, 15, 14, 0),
    end: new Date(2026, 7, 15, 15, 0),
  },
];

export const fetchPosts = async () => {
  await delay(500);
  return [...posts];
};

export const createPost = async (post) => {
  await delay(500);

  posts.push(post);

  return post;
};

export const updatePostApi = async (updatedPost) => {
  await delay(500);

  posts = posts.map((post) =>
    post.id === updatedPost.id ? updatedPost : post
  );

  return updatedPost;
};

export const deletePostApi = async (id) => {
  await delay(500);

  posts = posts.filter((post) => post.id !== id);

  return id;
};