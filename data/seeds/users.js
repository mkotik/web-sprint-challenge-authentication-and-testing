const bcrypt = require("bcryptjs");

const users = [
  { username: "mkotik", password: bcrypt.hashSync("pass", 8) },
  { username: "bob", password: bcrypt.hashSync("saget", 8) },
];

exports.users = users;

exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert(users);
    });
};
