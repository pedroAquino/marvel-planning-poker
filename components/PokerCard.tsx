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
  back?: boolean;
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

const CardBody = ({ imgSrc, bottomTitle, title, size, back, dimensions, playerName }) => {
  if (back) {
    return (
      <Flex flexDirection="column" justifyContent="center" w="100%" h="100%" >
        <CartTitle p="4">{playerName}</CartTitle>
        <Logo color="white" />
      </Flex>
    );
  } else {
    return (
      <>
        <CartTitle>{title}</CartTitle>
        <Image
          src={imgSrc}
          {...dimensions}
          alt={title}
        />
      </>
    );
  }
};

export default function PokerCard({ imgSrc, bottomTitle, title, size = 'md', playerName, back }: PokerCardProps) {
  const dimensions = getDimensions(largeDimension, size);
  const cardHeight = dimensions.height + 111;
  return (
    <Box h={cardHeight} p="5" color="white" bg="gray.800" borderRadius="lg">
      <CardBody
        imgSrc={imgSrc}
        bottomTitle={bottomTitle}
        title={title}
        size={size}
        back={back}
        dimensions={dimensions}
        playerName={playerName}
      />
      {!back && <CartTitle>{bottomTitle}</CartTitle>}
    </Box>
  );
};
