import { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Button from '../components/Button';
import Pusher from 'pusher-js';
import { v4 as uuid } from 'uuid';

const broadCastMessage = () => {
  fetch('/api/real-time', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'My Message !'
    })
  });
};

function RealTime() {
  
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const pusher = new Pusher('3911a524678e1dfdcd57', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      console.log(data);
      setMessages([...messages, data.message]);
    });
  });

  return (
    <>
      <Box p="4" >
        <Heading>Real Time</Heading>
        <Button size="sm" variant="outline" onClick={broadCastMessage}>BROADCAST MESSAGE</Button>
        <ul>
          {messages.map(message => <li key={uuid()} >{message}</li>)}
        </ul>
      </Box>
    </>
  );
};

export default RealTime;
