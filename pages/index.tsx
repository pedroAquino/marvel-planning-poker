import Footer from '../components/Footer';
import { Box } from '@chakra-ui/react';

function Home() {
  return (
    <Box h="100vh" pos="relative" borderColor="black" border="1px" borderStyle="solid" >
      <Footer pos="absolute" w="100%" bottom={0} left={0} />
    </Box>
  ); 
}

export default Home;