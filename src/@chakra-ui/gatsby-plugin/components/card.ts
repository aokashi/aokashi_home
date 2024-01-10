import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys)

const cardTheme = defineMultiStyleConfig({
  baseStyle: {
    container: {
      backgroundColor: 'gray.200',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'brand.500'
    },
    header: {
      color: 'brand.700'
    }
  },
  variants: {
    profile: definePartsStyle({
      container: {
        backgroundColor: 'silver.400',
        borderWidth: 0,
        borderRadius: 6
      },
      header: {
        backgroundColor: 'silver.900',
        borderTopRadius: 6,
        color: 'white',
        fontWeight: 'bold',
        px: 5,
        py: 3
      }
    })
  }
});

export default cardTheme;
