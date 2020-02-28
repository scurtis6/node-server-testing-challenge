
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'alex', city: '', state: 'AR', username: 'alex'},
        {name: 'fred', city: '', state: 'OH', username: 'fred'},
        {name: 'robin', city: '', state: 'KY', username: 'robin'}
      ]);
    });
};
