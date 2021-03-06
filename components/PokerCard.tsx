import { Box, Heading } from '@chakra-ui/react';
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

export default function PokerCard({ imgSrc, bottomTitle, title, size = 'md' }: PokerCardProps) {
  const dimensions = getCardDimensions(size);
  console.log(dimensions);
  return (
    <Box>
      <Heading size="md">{title}</Heading>
      <Image
        src="/images/hulk.jpeg"
        {...dimensions}
        alt={title} 
      />
      <Heading size="md">{bottomTitle}</Heading>
    </Box>
  );
};

