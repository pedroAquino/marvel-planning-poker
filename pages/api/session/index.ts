import { Session, ISession } from '../../../model/Session';
import { User, IUser, } from '../../../model/User';

interface ICreateSessionRequest {
  creator: IUser;
}

interface ICreateSessionResponse {
  session: ISession;
}

export default function handler(req, res) {
  const request: ICreateSessionRequest = req.body;
  const response: ICreateSessionResponse = {
    session: Session({ creator: User(request.creator) })
  };
  res.status(200).json(response);
};
