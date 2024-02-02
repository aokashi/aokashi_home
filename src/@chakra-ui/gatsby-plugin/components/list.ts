import { createMultiStyleConfigHelpers } from "@chakra-ui/react"
import { listAnatomy } from "@chakra-ui/anatomy"

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(listAnatomy.keys)

const listTheme = defineMultiStyleConfig({
  variants: {
    tableOfContents: definePartsStyle({
      container: {
        pl: 0,
        py: 2,
      },
      item: {
        _hover: {
          backgroundColor: 'gray.200'
        },
        p: 1,
      }
    })
  }
})

export default listTheme
