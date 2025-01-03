import connection from "../database.js";

export const getComments = async (req, res) => {
  res.send("GET comments");
};
export const addComment = async (req, res) => {
  res.send("POST comment");
};
export const deleteComment = async (req, res) => {
  res.send("DELETE comment");
};
export const editComment = async (req, res) => {
  res.send("UPDATE comment");
};
