const db = require("../../data/dbConfig");

const addUser = async (newUser) => {
  return await db("users").insert(newUser);
};

module.exports = { addUser };
