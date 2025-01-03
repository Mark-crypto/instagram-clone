import connection from "../database.js";

export const getPosts = (req, res) => {
  res.send("GET POSTS");
};
export const addPost = (req, res) => {
  res.send("CREATE POST");
};
export const editPost = (req, res) => {
  res.send("UPDATE POST");
};
export const deletePost = (req, res) => {
  res.send("DELETE POST");
};
