exports.up = (knex) => {

    return knex.schema.createTable("barqueiro", (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('cpf').notNullable();
        table.string('cir').notNullable();
        table.string('senha').notNullable();

        table.integer("id_barcoCadastro").unsigned().index().references("id").inTable("barcoCadastro")
        table.integer("id_rota").unsigned().index().references("id").inTable("rota")
})
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('barqueiro');
  };