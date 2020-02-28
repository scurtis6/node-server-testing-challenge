const db = require("../database/dbConfig");

module.exports = {
  find,
  findById,
  findBy,
  add,
  remove,
  update
};

function find() {
    return db("users").select("*");
};

function findById(id) {
    return db("users")
    .where('id', id)
    .first();
};

function add(user) {
    return db("users")
    .insert(user)
};

function findBy(filter) {
    return db("users")
    .select("id", "name", "username", "state")
    .where(filter);
};

function update(user, id) {
    return db('users')
    .where('id', id)
    .update(user)
}

function remove(id) {
    return db("users")
    .where("id", id)
    .del();
};
