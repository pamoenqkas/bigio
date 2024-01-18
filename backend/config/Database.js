import { Sequelize } from "sequelize";

const db = new Sequelize({
    database: 'bigio',
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
    username: 'root',
    password: null,
  });

export default db;