import { useState, useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Button from '../components/Button';
import Head from 'next/head';

declare global {
  interface Window {
    Pusher: any;
  }
}

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
    const { Pusher } = window;

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
      <Head>
        <script src="https://js.pusher.com/7.0/pusher.min.js"></script>
      </Head>
      <Box p="4" >
        <Heading>Real Time</Heading>
        <Button size="sm" variant="outline" onClick={broadCastMessage}>BROADCAST MESSAGE</Button>
      </Box>
    </>
  );
};

export default RealTime;
