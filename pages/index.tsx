import { Box, Center, Heading, Stack } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Button from '../components/Button';

function Home() {
  return (
    <Box h="100vh" pos="relative" borderColor="black" border="1px" borderStyle="solid" >
      <Box bg="gray.800" w="100%" h={["60%", "41%"]}>
        <Center>
          <Stack mt={["40", "24"]}>
            <Logo size="lg" color="white" />
            <Button>Start a new session</Button>
            <Heading size="lg" textAlign="center" color="white">OR</Heading>
            <Button>Join an existing one</Button>
          </Stack>
        </Center>
      </Box>
      <Footer p="4" pos="absolute" w="100%" bottom={0} left={0} />
    </Box>
  ); 
}

export default Home;