import connection from "../database.js";

export const getComments = async (req, res) => {
  try {
    const query = `SELECT * FROM comments`;
    connection.query(query, (err, result) => {
      if (err) {
        res.status(500).send({ error: "Internal server error" });
      } else {
        res.status(200).json(result); //results.rows
      }
    });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};
export const addComment = async (req, res) => {
  const { comment } = req.body;
  if (!comment) {
    res.status(400).send({ error: "Bad request" });
    return;
  }
  try {
    const query = `INSERT INTO comments (comment) VALUES (?)`;
    connection.query(query, [comment], (err, result) => {
      if (err) {
        res.status(500).send({ error: "Internal server error" });
      } else {
        res.status(201).send({ message: "Comment added successfully" });
      }
    });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};
export const deleteComment = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send({ error: "Bad request" });
    return;
  }
  try {
    const query = `DELETE FROM comments WHERE id = ?`;
    connection.query(query, [id], (err, result) => {
      if (err) {
        res.status(500).send({ error: "Internal server error" });
      } else {
        res.status(200).send({ message: "Comment deleted successfully" });
      }
    });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};
export const editComment = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  if (!id || !comment) {
    res.status(400).send({ error: "Bad request" });
    return;
  }
  try {
    const query = `UPDATE comments SET comment = ? WHERE id = ?`;
    connection.query(query, [comment, id], (err, result) => {
      if (err) {
        res.status(500).send({ error: "Internal server error" });
      } else {
        res.status(200).send({ message: "Comment updated successfully" });
      }
    });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};
