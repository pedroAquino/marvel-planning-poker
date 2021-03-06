import { Box, Stack, Heading } from '@chakra-ui/react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import PokerCard from '../components/PokerCard';

function Components() {
  return (
    <Box p="5">
      <Heading mb="5" >COMPONENTS PAGE</Heading>
      <Stack spacing={4} direction="row" align="center">
        <Box h={60}>
          <Heading mb="4" size="sm">Logo</Heading>
          <Logo />
        </Box>
        <Box h={60}>
          <Heading mb="4" size="sm">Button</Heading>
          <Button size="sm">start a new session</Button>
        </Box>
        <Box h={60}>
          <Heading mb="4" size="sm">Poker Card</Heading>
          <PokerCard
            title="Hulk"
            bottomTitle="13"
            imgSrc=""
            size="sm"
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default Components;