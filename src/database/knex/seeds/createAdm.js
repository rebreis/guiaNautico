const {hash} = require('bcryptjs');
const knex = require('knex');

exports.seed = async (knex) =>{
    const hashedsenha = await hash(process.env.ADM_SENHA, 8)

    await knex('usuario').insert([
        {
            name:process.env.USER_ADM,
            email: process.env.ADM_EMAIL,
            password: String(hashedsenha),
            isAdm: true

        }
    ])
    

    

}




