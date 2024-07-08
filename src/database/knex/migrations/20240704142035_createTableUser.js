exports.up = (knex) => {

    return knex.schema.createTable("usuario", (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('senha').notNullable();
        table.boolean('isAdm').defaultTo(false);
})
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('usuario');
  };
  