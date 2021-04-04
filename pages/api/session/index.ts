import { Session, ISession } from '../../../model/Session';
import { User, IUser, } from '../../../model/User';
import { db } from '../../../db/db';

interface ICreateSessionRequest {
  creator: IUser;
}

interface ICreateSessionResponse {
  session: ISession;
}

  // // RDS
  // const sequelize = new Sequelize({
  //   dialect: 'mysql',
  //   host: process.env.DATABASE_HOST,
  //   port: parseInt(process.env.DATABASE_PORT),
  //   password:  process.env.DATABASE_PASSWORD,
  //   username: process.env.DATABASE_USERNAME,
  //   database: process.env.DATABASE_NAME,
  // });

export default async function handler(req, res) {
  const request: ICreateSessionRequest = req.body;
  const response: ICreateSessionResponse = {
    session: Session({ creator: User(request.creator) })
  };
  const { sequelize } = db;

  console.log('CONFIG >>>>>>>>>> ', sequelize.config);

  // try {
  //   await sequelize.authenticate();
  // } catch (error) {
  //   console.error('Not Connected', error);
  //   const errResponse = {
  //     stack: error
  //   };
  //   res.status(500).json(errResponse);
  // }
  // await sequelize.close();

  res.status(200).json(sequelize.config);
};
