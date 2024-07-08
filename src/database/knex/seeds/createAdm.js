const {hash} = require('bcryptjs');
const knex = require('../../knex');
require('dotenv/config.js')

exports.seed = async () =>{
    const hashedsenha = await hash(process.env.ADM_SENHA, 8)

    await knex('usuario').insert([
        {
            nome:process.env.USER_ADM,
            email: process.env.ADM_EMAIL,
            senha: String(hashedsenha),
            isAdm: true

        }
    ])
    

    

}




