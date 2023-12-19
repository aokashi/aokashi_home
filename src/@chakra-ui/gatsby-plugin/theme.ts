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
      50: '#fff',
      100: '#f0f0f0',
      200: '#e0e0e0',
      300: '#d0d0d0',
      400: '#c0c0c0',
      500: '#a0a0a0',
      600: '#808080',
      700: '#606060',
      800: '#404040',
      900: '#202020',
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.800',
        fontFamily: '"Noto Sans CJK JP", "Noto Sans JP", "Noto Sans", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", -sans-serif',
        margin: 0,
      },
      h1: {
        color: 'brand.800'
      },
      h2: {
        color: 'brand.800'
      },
      h3: {
        color: 'brand.800'
      },
      h4: {
        color: 'brand.800'
      },
      h5: {
        color: 'brand.800'
      },
      h6: {
        color: 'brand.800'
      },
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
          bgColor: 'silver.300',
          borderLeft: '4px solid',
          borderColor: 'gray.500',
          borderRadius: 0,
          display: 'block',
          fontWeight: 'normal',
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
    },
    Container: {
      baseStyle: {
        // https://chakra-ui.com/docs/styled-system/theme#breakpoints
        maxW: ['30em', '48em', '62em', '100ch', '128ch', '152ch'],
        padding: 0,
      }
    }
  }
};

export default extendTheme(theme)
