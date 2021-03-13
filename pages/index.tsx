import { Box, Center, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Modal from '../components/Modal';
import JoinSessionForm from '../components/JoinSessionForm';
import StartNewSession from '../components/StartNewSessionForm';
import { useRouter } from 'next/router';

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
    <Box h="100vh" pos="relative" borderColor="black" border="1px" borderStyle="solid" >
      <Box bg="gray.800" w="100%" h={["60%", "41%"]}>
        <Center>
          <Stack mt={["40", "24"]}>
            <Logo size="lg" color="white" />
            <StartNewSessionModal />
            <Heading size="lg" textAlign="center" color="white">OR</Heading>
            <JoinSessionModal />
          </Stack>
        </Center>
      </Box>
      <Footer p="4" pos="absolute" w="100%" bottom={0} left={0} />
    </Box>
  ); 
}

export default Home;