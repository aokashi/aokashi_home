import { AlertProps, createMultiStyleConfigHelpers } from "@chakra-ui/react"
import { alertAnatomy } from "@chakra-ui/anatomy";

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(alertAnatomy.keys)

const alertTheme = defineMultiStyleConfig({
  variants: {
    outline: definePartsStyle((props: AlertProps) => ({
      container: {
        border: '2px solid',
        borderColor: `${props.colorScheme}.500`,
        borderRadius: 6,
        background: `${props.colorScheme}.100`,
        color: `${props.colorScheme}.800`,
      }
    }))
  }
})

export default alertTheme
