import { Session, User, IUser, ISession } from '../../model';

interface ICreateSessionRequest {
  creator: IUser;
}

interface ICreateSessionResponse extends ISession {}

export default function handler(req, res) {
  methods[req.method](req, res);
};

const methods = {
  'POST': (req, res) => {
    const request: ICreateSessionRequest = req.body;
    const response: ICreateSessionResponse = Session({
      creator: User(request.creator)
    });
    res.status(200).json(response);
  }
};