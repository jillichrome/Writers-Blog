let post;

const builder = {
  setPost(newPost) {
    post = newPost;
  },

  getPost() {
    return post;
  }
}

export default builder;
