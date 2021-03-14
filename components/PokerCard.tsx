import { Box, Center, Heading, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { getDimensions, decreaseBy } from './helpers/getDimensions';
import Logo from './Logo';

export interface PokerCardProps {
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

const CartTitle = ({ children, p = '1', size }) => {
  return (
  <Heading letterSpacing="xl" size={size} p={p} textTransform="uppercase">
    <Center>{children}</Center>
  </Heading>
  );
};

const CardBody = ({ imgSrc, bottomTitle, title, size, variant, dimensions, playerName }) => {
  const { width, height } = dimensions;
  const variants = {
    back: (
      <Flex flexDirection="column" justifyContent="center" w="100%" h="100%" >
        <CartTitle size={size} p="4">{playerName}</CartTitle>
        <Center>
          <Logo size={size} color="white" />
        </Center>
      </Flex>
    ),
    normal: (
      <>
        <CartTitle size={size} >{title}</CartTitle>
        <Center>
          <Image
            src={imgSrc}
            width={decreaseBy(1.3, width)}
            height={decreaseBy(1.3, height)}
            alt={title}
          />
        </Center>
      </>
    ),
    empty: (
      <Flex flexDirection="column" justifyContent="center" w="100%" h="100%" >
        <CartTitle size={size}>{playerName}</CartTitle>
      </Flex>
    )
  };
  return variants[variant];
};

const variantStyles = (variant) => ({
  back: {
    bg: 'gray.800',
    color: 'white',
  },
  normal: {
    bg: 'gray.800',
    color: 'white',
    _hover: {
      cursor: 'pointer',
      boxShadow: 'dark-lg',
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.2)',
    }
  },
  empty: {
    bg: 'transparent',
    color: 'gray.400',
    border: '2px',
    borderStyle: 'dashed',
    borderColor: 'gray.200',
  }
}[variant]);

const sizeStyles = (size) => ({
  sm: {},
  md: {},
  lg: {},
}[size]);

export function PokerCard({ imgSrc, bottomTitle, title, size = 'md', playerName, variant = 'normal' }: PokerCardProps) {
  const dimensions = getDimensions(largeDimension, size);
  const styles = {
    ...variantStyles(variant),
    ...sizeStyles(size),
  };
  return (
    <Box
      h={dimensions.height}
      w={dimensions.width}
      borderRadius="lg"
      {...styles}
    >
      <CardBody
        imgSrc={imgSrc}
        bottomTitle={bottomTitle}
        title={title}
        size={size}
        variant={variant}
        dimensions={dimensions}
        playerName={playerName}
      />
      {variant === 'normal' && <CartTitle size={size}>{bottomTitle}</CartTitle>}
    </Box>
  );
};

export default PokerCard;
