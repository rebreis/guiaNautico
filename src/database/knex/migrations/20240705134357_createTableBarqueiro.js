exports.up = (knex) => {

    return knex.schema.createTable("barqueiro", (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.strign('cpf').notNullable();
        table.string('cir').notNullable();
        table.string('senha').notNullable();
})
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('barqueiro');
  };
  
