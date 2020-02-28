const db = require("../database/dbConfig");

module.exports = {
  find,
  findById,
  findBy,
  add,
};

function find() {
  return db("users").select("*");
};

function findById(id) {
  return db("users")
    .where('id', id)
    .first();
};

function add(user, id) {
    newUser = {...user, id}
  return db("users")
  .insert(newUser)
};

function findBy(filter) {
  return db("users")
    .select("id", "name", "username", "state")
    .where(filter);
}
