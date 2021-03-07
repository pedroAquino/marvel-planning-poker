import { Box, Center, Heading } from '@chakra-ui/react';
import Image from 'next/image';

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

const decreaseBy = (factor: number, value: number) => value / factor;

const getCardDimensions = (size) => ({
  sm: { 
    width: decreaseBy(2, largeDimension.width),
    height: decreaseBy(2, largeDimension.height)
  },
  md: { 
    width: decreaseBy(1.5, largeDimension.width),
    height: decreaseBy(1.5, largeDimension.height)
  },
  lg: largeDimension
}[size])

const CartTitle = ({ children }) => {
  return (
  <Heading size="md" p="1" textTransform="uppercase">
    <Center>{children}</Center>
  </Heading>
  );
};

export default function PokerCard({ imgSrc, bottomTitle, title, size = 'md' }: PokerCardProps) {
  const dimensions = getCardDimensions(size);
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

