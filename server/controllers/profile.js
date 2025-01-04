import connection from "../database.js";

export const getProfile = (req, res) => {
  const { id } = req.params;
  try {
    connection.query(
      "SELECT * FROM users WHERE id = ?",
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
