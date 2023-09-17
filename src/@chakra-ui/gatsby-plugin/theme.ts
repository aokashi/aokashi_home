import { extendTheme } from '@chakra-ui/react';

const theme = {
  colors: {
    brand: {
      50: '#c0e0ff',
      100: '#c0e0ff',
      200: '#80c0ff',
      300: '#80c0ff',
      400: '#6080e0',
      500: '#4080c0',
      600: '#3060b0',
      700: '#2040a0',
      800: '#000080',
      900: '#000040',
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.800'
      }
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand'
      }
    },
    Card: {
      baseStyle: {
        container: {
          backgroundColor: 'gray.200',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: 'brand.500'
        }
      }
    }
  }
};

export default extendTheme(theme)
