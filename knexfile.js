const path = require('path');
require('dotenv/config.js')
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USUARIO,
      password: process.env.DB_SENHA,
      database: process.env.DATABASE
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'seeds'),
    },
    
    useNullAsDefault: true
  },
};

