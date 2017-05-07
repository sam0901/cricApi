module.exports = {
  up: knex =>
    knex.schema.createTableIfNotExists('players', t => {
      t.increments('id').primary();
      t.string('first_name').notNullable();
      t.string('last_name').notNullable();
      t.string('email').notNullable();
      t.string('username').notNullable();
      t.unique(['email', 'username']);
    }),
  down: knex =>
    knex.schema.dropTableIfExists('players')
};
