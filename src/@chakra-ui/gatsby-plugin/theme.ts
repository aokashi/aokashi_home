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
    },
    silver: {
      50: '#c0c0c0',
      100: '#c0c0c0',
      200: '#c0c0c0',
      300: '#c0c0c0',
      400: '#c0c0c0',
      500: '#c0c0c0',
      600: '#404040',
      700: '#404040',
      800: '#404040',
      900: '#404040',
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.800',
        fontFamily: '"Noto Sans CJK JP", "Noto Sans JP", "Noto Sans", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", -sans-serif',
        margin: 0,
      }
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand'
      },
      variants: {
        navItem: {
          _hover: {
            bgColor: 'gray.500'
          },
          bgColor: 'silver.500',
          borderLeft: '4px solid',
          borderColor: 'gray.500',
          borderRadius: 0,
          display: 'block',
          height: 'auto',
          margin: 4,
          padding: 3,
          textDecoration: 'none',
        }
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
