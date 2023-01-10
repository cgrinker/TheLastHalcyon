import '../public/style.css'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react';
import Fonts from '../components/sys/Fonts';

const colors = {
    vaporwave: {
      violet: '#300350',
      purple: '#94167F',
      pink: '#2a69ac',
      orange: "#F9AC53",
      rose: "#F62E97",
      blue: "#153CB4"
    },
  }

export const theme = extendTheme({ colors, 
  fonts: {
    heading: `Eva sans-serif`,
    body: `Eva sans-serif`,
  },
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
    
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp