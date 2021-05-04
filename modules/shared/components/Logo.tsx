import Image from 'next/image';
import { Box, Heading, Center } from '@chakra-ui/react';
import getDimensions from '../helpers/getDimensions';

interface LogoProps {
  color?: any;
  size?: 'sm' | 'md' | 'lg';
  width?: number;
  height?: number;
}

const lg = {
  width: 300,
  height: 120,
};

const headingSizes = {
  sm: 'sm',
  md: 'md',
  lg: 'xl',
};

export default function Logo({ size = 'md', color = 'black' }: LogoProps) {
  const { width, height } = getDimensions(lg, size);
  return (
    <Box w={width} >
      <Image
        src="/images/logo.svg"
        width={width}
        height={height}
        alt="marvel" 
      />
      <Center>
        <Heading color={color} size={headingSizes[size]}>PLANNING POKER</Heading>
      </Center>
    </Box>
  );
};