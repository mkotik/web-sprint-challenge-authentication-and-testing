const users = [
  { username: "mkotik", password: "pass" },
  { username: "bob", password: "saget" },
];

exports.users = users;

exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert(users);
    });
};
