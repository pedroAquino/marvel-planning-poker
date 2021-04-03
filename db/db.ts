import { Sequelize } from 'sequelize';
import configs from './config';

const VERCEL_ENV = process.env.VERCEL_ENV;
const config = configs[VERCEL_ENV];

const sequelize = new Sequelize({
  ...config,
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
