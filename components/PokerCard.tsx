import { Box, Center, Heading, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import getDimensions from './helpers/getDimensions';
import Logo from './Logo';

interface PokerCardProps {
  imgSrc: string;
  bottomTitle: string;
  title: string;
  playerName?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'back' | 'normal' | 'empty';
}

const largeDimension = {
  width: 300,
  height: 450
};

const CartTitle = ({ children, p = '1' }) => {
  return (
  <Heading letterSpacing="xl" size="md" p={p} textTransform="uppercase">
    <Center>{children}</Center>
  </Heading>
  );
};

const CardBody = ({ imgSrc, bottomTitle, title, size, variant, dimensions, playerName }) => {
  const variants = {
    back: (
      <Flex flexDirection="column" justifyContent="center" w="100%" h="100%" >
        <CartTitle p="4">{playerName}</CartTitle>
        <Logo color="white" />
      </Flex>
    ),
    normal: (
      <>
        <CartTitle>{title}</CartTitle>
        <Image
          src={imgSrc}
          {...dimensions}
          alt={title}
        />
      </>
    ),
    empty: (
      <Flex flexDirection="column" justifyContent="center" w="100%" h="100%" >
        <CartTitle>{playerName}</CartTitle>
      </Flex>
    )
  };
  return variants[variant];
};

const variantStyles = (dimensions, variant) => ({
  back: {
    bg: 'gray.800',
    color: 'white',
  },
  normal: {
    bg: 'gray.800',
    color: 'white',
  },
  empty: {
    bg: 'transparent',
    color: 'gray.400',
    w: dimensions.width + 40,
    border: '2px',
    borderStyle: 'dashed',
    borderColor: 'gray.200'
  }
}[variant]);

export default function PokerCard({ imgSrc, bottomTitle, title, size = 'md', playerName, variant = 'normal' }: PokerCardProps) {
  const dimensions = getDimensions(largeDimension, size);
  const cardHeight = dimensions.height + 111;
  const styles = variantStyles(dimensions, variant);
  return (
    <Box h={cardHeight} {...styles} p="5" borderRadius="lg">
      <CardBody
        imgSrc={imgSrc}
        bottomTitle={bottomTitle}
        title={title}
        size={size}
        variant={variant}
        dimensions={dimensions}
        playerName={playerName}
      />
      {variant === 'normal' && <CartTitle>{bottomTitle}</CartTitle>}
    </Box>
  );
};
