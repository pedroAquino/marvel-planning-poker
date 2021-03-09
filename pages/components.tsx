import { Box, Stack, Heading, useDisclosure } from '@chakra-ui/react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import PokerCard from '../components/PokerCard';
import Modal from '../components/Modal';
import JoinSessionForm from '../components/JoinSessionForm';
import StartNewSession from '../components/StartNewSessionForm';

const JoinSession = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box h={60}>
      <Heading mb="4" size="sm">Join session modal</Heading>
      <Button onClick={onOpen} size="sm">Show Modal</Button>
      <Modal title="Join an existing session" isOpen={isOpen} onClose={onClose}>
        <JoinSessionForm onJoinSession={() => null} />
      </Modal>
    </Box>
  );
};

const StartSession = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box h={60}>
      <Heading mb="4" size="sm">Start session modal</Heading>
      <Button onClick={onOpen} size="sm">Show Modal</Button>
      <Modal title="Start new session" isOpen={isOpen} onClose={onClose}>
        <StartNewSession onStartSession={() => null} />
      </Modal>
    </Box>
  );
};

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
            imgSrc="/images/hulk.jpeg"
            size="sm"
          />
        </Box>
        <Box h={60}>
          <Heading mb="4" size="sm">Poker Card Back</Heading>
          <PokerCard
            title="Hulk"
            bottomTitle="13"
            imgSrc="/images/hulk.jpeg"
            size="sm"
            playerName="Pedro"
            variant="back"
          />
        </Box>
        <Box h={60}>
          <Heading mb="4" size="sm">Poker Card Empty</Heading>
          <PokerCard
            title="Hulk"
            bottomTitle="13"
            imgSrc="/images/hulk.jpeg"
            size="sm"
            playerName="Pedro"
            variant="empty"
          />
        </Box>
        <JoinSession />
        <StartSession />
      </Stack>
    </Box>
  );
}

export default Components;