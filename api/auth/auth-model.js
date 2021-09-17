const db = require("../../data/dbConfig");

const addUser = async (newUser) => {
  const [newId] = await db("users").insert(newUser);
  return db("users").where("id", newId).first();
};

const getBy = async (filter) => {
  return await db("users").where(filter).first();
};
module.exports = { addUser, getBy };
