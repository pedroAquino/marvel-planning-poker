const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '1173589',
  key: '3911a524678e1dfdcd57',
  secret: '6922fe0e3e4ef66f989b',
  cluster: 'eu',
  useTLS: true
});

export default function realTime(req, res) {
  const request = req.body;
  const response = {
    message: request.message
  };

  pusher.trigger('my-channel', 'my-event', response);

  res.status(200).json(response); 
}
