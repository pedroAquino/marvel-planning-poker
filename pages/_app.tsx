import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/roboto-condensed';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
