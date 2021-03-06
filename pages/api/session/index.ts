import { Session, User, IUser, ISession } from '../../../model';

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
