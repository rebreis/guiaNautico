const knex = require("knex");
const { table } = require("..");

exports.up = (knex) => {
    return knex.schema.createTable("rota", (table) => {
        table.increments('id')
    })
}