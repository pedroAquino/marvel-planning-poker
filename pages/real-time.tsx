import { useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Button from '../components/Button';
import Pusher from 'pusher-js';

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
  
  useEffect(() => {
    const pusher = new Pusher('3911a524678e1dfdcd57', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      console.log(data)
    });
  });

  return (
    <>
      <Box p="4" >
        <Heading>Real Time</Heading>
        <Button size="sm" variant="outline" onClick={broadCastMessage}>BROADCAST MESSAGE</Button>
      </Box>
    </>
  );
};

export default RealTime;
