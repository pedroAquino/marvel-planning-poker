import { Sequelize } from 'sequelize';
import configs from './config';
import mysql2 from 'mysql2';

const VERCEL_ENV = process.env.VERCEL_ENV;
const config = configs[VERCEL_ENV];

console.log('CONFIG >>>>>>>>>> ', config);

const sequelize = new Sequelize({
  ...config,
  dialectModule: mysql2,
  pool: {
    max: 5,
    min: 0,
    acquire: 20000,
    idle: 10000
  }
});

export const db = {
  sequelize,
  Sequelize
};
