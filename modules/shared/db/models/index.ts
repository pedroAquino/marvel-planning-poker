import { DataTypes, Sequelize } from 'sequelize';
import configs from '../config';
import Sessions from './sessions';
import Users from './users';

type Db = { sequelize: any; Sequelize: Sequelize } & any;

const config = configs[process.env.VERCEL_ENV];
const db: Db = {};

const _models = [
  Sessions,
  Users
];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

_models.forEach(_model => {
  const model = _model(sequelize, DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
