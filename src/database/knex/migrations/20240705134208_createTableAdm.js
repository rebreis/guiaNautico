exports.up = (knex) => {

    return knex.schema.createTable("adm", (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('senha').notNullable();
        table.string('telefone').notNullable();
        table.string('email').notNullable();
        table.string('cpf').notNullable();   
})
};

  exports.down = (knex) => {
    return knex.schema.dropTableIfExists('adm');
  };
