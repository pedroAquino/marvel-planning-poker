import { ModelDefined, Optional } from 'sequelize';

interface UserAttributes {
  id: number;
  name: string;
  role: 'OBSERVER' | 'PLAYER';
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{};

export type UserDbModel = ModelDefined<UserAttributes, UserCreationAttributes>;

export default (sequelize, DataTypes) => {
  const User: UserDbModel = sequelize.define(
    'Users',
    {
      name: DataTypes.STRING,
      role: DataTypes.STRING,
    }
  );
  return User;
};