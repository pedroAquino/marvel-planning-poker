import Image from 'next/image';
import { Box, Heading, Center } from '@chakra-ui/react';

export default function Logo({ width = 150, height = 60, color = 'black' } = {}) {
  return (
    <Box w={width} >
      <Image
        src="/images/logo.svg"
        width={width}
        height={height}
        alt="marvel" 
      />
      <Center>
        <Heading color={color} letterSpacing="xl" size="sm">PLANNING POKER</Heading>
      </Center>
    </Box>
  );
};