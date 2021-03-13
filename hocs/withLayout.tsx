import React from 'react';
import Footer from '../components/Footer';
import { Box } from '@chakra-ui/react';

export const withLayout = (Page: React.FunctionComponent) => {
  return function PageWithLayout(props) {
    return (
      <Box h="100vh" pos="relative">
        <Page {...props} />
        <Footer p="4" pos="absolute" w="100%" bottom={0} left={0} />
      </Box>
    );
  }
}

export default withLayout;
