import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

const buttonTheme = defineStyleConfig({
  defaultProps: {
    colorScheme: 'brand',
  },
  variants: {
    navItem: defineStyle({
      _hover: {
        bgColor: 'gray.500',
        textDecoration: 'none',
      },
      bgColor: 'silver.300',
      borderLeft: '4px solid',
      borderColor: 'gray.500',
      borderRadius: 0,
      display: 'block',
      fontWeight: 'normal',
      height: 'auto',
      marginX: 4,
      marginY: 2,
      padding: 3,
      textDecoration: 'none',
    }),
    jumpTop: defineStyle({
      _hover: {
        bgColor: 'silver.400',
      },
      bgColor: 'silver.200',
      border: 0,
      borderRadius: 0,
      color: 'gray.600',
      cursor: 'pointer',
    })
  },
})

export default buttonTheme
