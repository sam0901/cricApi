module.exports = {
  up: knex =>
    knex.schema.createTableIfNotExists('players', table => {
      table.increments('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.unique(['email']);
    }),
  down: knex =>
    knex.schema.dropTableIfExists('players')
};
