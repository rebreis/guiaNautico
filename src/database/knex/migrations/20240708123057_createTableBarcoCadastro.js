exports.up = (knex) => {

    return knex.schema.createTable("barco", (table) => {
        table.increments('id').primary();
        table.string('capacidade').notNullable();
        table.string('cor').notNullable();
        table.string('nomeBarco').notNullable();
        table.string('registroBarco').notNullable();

})
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('barco');
  };
  