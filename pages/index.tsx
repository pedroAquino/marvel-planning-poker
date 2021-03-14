import { Box, Center, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Modal from '../components/Modal';
import JoinSessionForm from '../components/JoinSessionForm';
import StartNewSession from '../components/StartNewSessionForm';
import { useRouter } from 'next/router';
import { withLayout } from '../hocs/withLayout';

function StartNewSessionModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { push } = useRouter();
  return (
    <>
      <Button onClick={onOpen} >Start a new session</Button>
      <Modal title="Join an existing session" isOpen={isOpen} onClose={onClose}>
        <StartNewSession onStartSession={() => push('/session/1234')} />
      </Modal>    
    </>
  );  
}

function JoinSessionModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { push } = useRouter();
  return (
    <>
      <Button onClick={onOpen} >Join an existing one</Button>
      <Modal title="Join an existing session" isOpen={isOpen} onClose={onClose}>
        <JoinSessionForm onJoinSession={() => push('/session/1234')} />
      </Modal>
    </>
  )
}

function Home() {
  return (
    <Box bg="gray.800" w="100%" h="395px">
      <Center>
        <Stack mt={["28", "24"]}>
          <Logo size="lg" color="white" />
          <StartNewSessionModal />
          <Heading size="lg" textAlign="center" color="white">OR</Heading>
          <JoinSessionModal />
        </Stack>
      </Center>
    </Box>
  );
}

export default withLayout(Home);