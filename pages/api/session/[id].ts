import { Session, User, IUser, ISession, UserRole } from '../../../model';

interface IJoinSessionRequest {
  user: IUser;
}

interface IJoinSessionResponse {
  session: ISession;
}

// MOCKED DATA FOR NOW
const users: IUser[] = [
  {
    name: 'Johm Doe',
    role: UserRole['player'],
  },
  {
    name: 'Jane Doe',
    role: UserRole['player'],
  },
  {
    name: 'Albert Einstein',
    role: UserRole['observer'],
  }
];

const creator: IUser = {
  name: 'Albert Einstein',
  role: UserRole['observer'],
};

export default function handler(req, res) {
  const { id } = req.query;
  const request: IJoinSessionRequest = req.body;
  
  const response: IJoinSessionResponse = {
    session: Session({
      id,
      creator,
      users: [...users, User(request.user)]
    })
  };
  
  res.status(200).json(response);
};
