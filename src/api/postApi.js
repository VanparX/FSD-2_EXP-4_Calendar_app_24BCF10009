const wait = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

let posts = [];

export const fetchPosts = async () => {
  await wait(300);
  return [...posts];
};

export const createPost = async (post) => {
  await wait(300);

  posts.push(post);

  return post;
};

export const deletePostApi = async (id) => {
  await wait(300);

  posts = posts.filter((post) => post.id !== id);

  return id;
};

export const updatePostApi = async (post) => {
  await wait(300);

  posts = posts.map((item) =>
    item.id === post.id ? post : item
  );

  return post;
};