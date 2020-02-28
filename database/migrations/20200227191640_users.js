
exports.up = function(knex) {
  return knex.schema.createTable('users', function(tbl) {
      tbl.increments();

      tbl.string('name', 128).notNullable();

      tbl.string('city', 128)

      tbl.string('state', 128).notNullable();

      tbl.string('username', 128)
      .notNullable().unique();

      // tbl.string('password', 128)
      // .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
