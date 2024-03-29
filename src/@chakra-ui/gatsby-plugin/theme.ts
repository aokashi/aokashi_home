import { extendTheme } from '@chakra-ui/react'

import Alert from './components/alert'
import Button from './components/button'
import Card from './components/card'
import Link from './components/link'
import List from './components/list'

const theme = extendTheme({
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
      a: {
        _hover: {
          color: 'brand.800',
        },
        color: 'brand.500',
        textDecoration: 'none',
      },
      ul: {
        paddingLeft: 8,
      },
      ol: {
        paddingLeft: 8,
      },
      '.ah-article': {
        '> h2': {
          bgColor: 'transparent',
          bgGradient: 'linear(to-r, silver.300, transparent)',
          borderLeftWidth: 16,
          borderStyle: 'solid',
          borderColor: 'brand.800',
          color: 'brand.800',
          fontSize: '2xl',
          fontWeight: 'bold',
          marginTop: '1rem',
          marginBottom: '.5rem',
          padding: 3,
        },
        '> h3': {
          color: 'brand.800',
          fontSize: 'lg',
          fontWeight: 'bold',
          marginTop: '1rem',
          marginBottom: '.5rem',
          padding: 2,
        },
        '> p': {
          my: '1rem',
        },
        '> blockquote': {
          bgColor: 'silver.200',
          borderLeftWidth: 5,
          borderStyle: 'solid',
          borderColor: 'silver.700',
          padding: '1rem'
        }
      }
    }
  },
  components: {
    Alert,
    Button,
    Card,
    Container: {
      baseStyle: {
        // https://chakra-ui.com/docs/styled-system/theme#breakpoints
        maxW: ['30em', '48em', '62em', '100ch', '128ch', '152ch'],
        padding: 0,
      }
    },
    Link,
    List
  }
})

export default theme
