exports.up = (knex) => {

    return knex.schema.createTable("rota", (table) => {
        table.increments('id').primary();
        table.string('horario').notNullable();
        table.string('origem').notNullable();
        table.string('destino').notNullable();
        table.string('valorFixo').notNullable();
        table.boolean('diasOperacao').defaultTo(false);
})
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('rota');
  };
  