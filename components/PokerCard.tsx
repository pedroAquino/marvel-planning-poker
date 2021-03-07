import { Box, Center, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import getDimensions from './helpers/getDimensions';

interface PokerCardProps {
  imgSrc: string;
  bottomTitle: string;
  title: string;
  size?: 'sm' | 'md' | 'lg';
}

const largeDimension = {
  width: 300,
  height: 450
};

const CartTitle = ({ children }) => {
  return (
  <Heading size="md" p="1" textTransform="uppercase">
    <Center>{children}</Center>
  </Heading>
  );
};

export default function PokerCard({ imgSrc, bottomTitle, title, size = 'md' }: PokerCardProps) {
  const dimensions = getDimensions(largeDimension, size);
  return (
    <Box p="5" color="white" bg="black" borderRadius="lg">
      <CartTitle>{title}</CartTitle>
      <Image
        src="/images/hulk.jpeg"
        {...dimensions}
        alt={title} 
      />
      <CartTitle>{bottomTitle}</CartTitle>
    </Box>
  );
};

