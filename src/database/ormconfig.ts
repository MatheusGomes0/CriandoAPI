import { DataSource } from "typeorm"

import dotenv from "dotenv"

dotenv.config()

const dataBase = new DataSource({
    type: 'sqlite',
    database: process.env.DATABASE || './src/database/database.sqlite',
    entities: [
      './src/models/*.ts'
    ],
    logging: true, // log das queries executadas
    synchronize: true // cria as tabelas automaticamente
  })

  dataBase.initialize()
  .then(() => {
    console.log(`Banco de dados conectado com sucesso`);
  })
  .catch((erro) => {
    console.error(`Erro ao inicializar o banco de dados`, erro);
  })

export default dataBase
  