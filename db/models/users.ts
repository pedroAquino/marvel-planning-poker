import { ModelDefined, Optional } from 'sequelize';

interface UserAttributes {
  id: number;
  name: string;
  role: 'OBSERVER' | 'PLAYER';
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{};

export type UserModel = ModelDefined<UserAttributes, UserCreationAttributes>;

export default (sequelize, DataTypes) => {
  const User: UserModel = sequelize.define(
    'Users',
    {
      name: DataTypes.STRING,
      role: DataTypes.STRING,
    }
  );
  return User;
};