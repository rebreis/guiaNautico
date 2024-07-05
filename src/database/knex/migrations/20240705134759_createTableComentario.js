exports.up = (knex) => {

    return knex.schema.createTable("comentario", (table) => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.string('conteudo').notNullable();
        table.string('dataCriacao').notNullable();
        
        table.integer("id_usuario").unsigned().index().references("id").inTable("usuario")
        table.integer("id_barqueiro").unsigned().index().references("id").inTable("barqueiro")
})
};
  exports.down = (knex) => {
    return knex.schema.dropTableIfExists('comentario');
  };

