import Button from '../components/Button';
import { Box, Heading } from '@chakra-ui/react';
import Logo from '../components/Logo';

function Components() {
  return (
    <Box p="5">
      <Heading mb="5" >COMPONENTS PAGE</Heading>
      <Box>
        <Heading mb="4" size="sm">Logo</Heading>
        <Logo />
      </Box>
    </Box>
  );
}

export default Components;