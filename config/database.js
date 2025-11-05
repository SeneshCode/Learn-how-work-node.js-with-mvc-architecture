import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Setup firstly Sequelize with MySQL
// npm install sequelize mysql2

const database = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', // uses mysql2 internally
  }
);

export default database;
