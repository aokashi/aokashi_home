import { defineStyleConfig } from '@chakra-ui/react'

const linkTheme = defineStyleConfig({
  baseStyle: {
    _hover: {
      color: 'blue.800',
    },
    color: 'blue.600',
  },
})

export default linkTheme
