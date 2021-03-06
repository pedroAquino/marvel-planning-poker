import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto-condensed';

const theme = extendTheme({
  fonts: {
    body: 'Roboto Condensed',
    heading: 'Roboto Condensed',
    mono: 'Roboto Condensed'
  }
});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
