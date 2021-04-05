import { 
  ModelDefined, 
  Optional,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasOneGetAssociationMixin,
} from 'sequelize';
import { UserDbModel } from './users';

interface AssociateModel {
  associate: (models: any) => void;
}

interface SessionAttributes {
  id: number;
  name: string;
  displayId: string;

  // associations
  getUsers?: HasManyGetAssociationsMixin<UserDbModel>;
  getUser?: HasOneGetAssociationMixin<UserDbModel>;
  addUser?: HasManyAddAssociationMixin<UserDbModel, number>;
}

interface SessionCreationAttributes extends Optional<SessionAttributes, 'id'>{};

export type SessionDbModel = ModelDefined<SessionAttributes, SessionCreationAttributes>;

export default (sequelize, DataTypes) => {
  // define fields connected with database
  const Session: SessionDbModel & AssociateModel = sequelize.define('Sessions', {
    name: DataTypes.STRING,
    displayId: DataTypes.UUID,
  });

  // define associations method
  Session.associate = function(models) {
    models.Sessions.belongsTo(models.Users);
    models.Sessions.hasMany(models.Users);
  };

  return Session;
};
