import connection from "../database.js";

export const getPosts = (req, res) => {
  try {
    connection.query("SELECT * FROM posts", (error, results) => {
      if (error) {
        res.status(500).send({ error: "Internal server error" });
      } else {
        res.send(results); //results.rows
      }
    });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

export const getPost = (req, res) => {
  const { id } = req.params;
  try {
    connection.query(
      "SELECT * FROM posts WHERE id = ?",
      [id],
      (error, results) => {
        if (error) {
          res.status(500).send({ error: "Internal server error" });
        } else {
          res.send(results); //results.rows
        }
      }
    );
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

export const addPost = (req, res) => {
  const { image, likes, user_id, caption } = req.body;
  if (!image || !likes || !user_id || !caption) {
    res.status(400).send({ error: "Bad request" });
    return;
  }
  try {
    connection.query(
      "INSERT INTO posts (image, likes, user_id, caption) VALUES (?,?,?,?)",
      [image, likes, user_id, caption],
      (error, results) => {
        if (error) {
          res.status(500).send({ error: "Internal server error" });
        } else {
          res.status(201).send({ message: "Post added successfully" });
        }
      }
    );
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};
export const editPost = (req, res) => {
  const { id } = req.params;
  const { image, likes, user_id, caption } = req.body;
  if (!image || !likes || !user_id || !caption || !id) {
    res.status(400).send({ error: "Bad request" });
    return;
  }
  try {
    connection.query(
      "UPDATE posts SET image = ?, likes = ?, user_id = ?, caption = ? WHERE id = ?",
      [image, likes, user_id, caption, id],
      (error, results) => {
        if (error) {
          res.status(500).send({ error: "Internal server error" });
        } else {
          res.status(200).send({ message: "Post updated successfully" });
        }
      }
    );
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};
export const deletePost = (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send({ error: "Bad request" });
    return;
  }
  try {
    connection.query(
      "DELETE FROM posts WHERE id = ?",
      [id],
      (error, results) => {
        if (error) {
          res.status(500).send({ error: "Internal server error" });
        } else {
          res.status(200).send({ message: "Post deleted successfully" });
        }
      }
    );
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};
