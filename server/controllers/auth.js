import connection from "../database.js";

export const getAuth = (req, res) => {
  res.send("Auth route");
};
export const addAuth = (req, res) => {
  const {} = req.body;
  res.send("Auth route");
};
export const editAuth = (req, res) => {
  const {} = req.params;
  res.send("Auth route");
};
export const deleteAuth = (req, res) => {
  const {} = req.params;
  res.send("Auth route");
};
