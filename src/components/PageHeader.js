import React from "react"
import PropTypes from "prop-types"
import { Box, HStack, Image } from "@chakra-ui/react"

const PageHeaderBase = (styleFunction, contentFunction) => {
  const Component = ({ image, bottomContent, children }) => (
    <Box
      bgColor="silver.500"
      fontWeight="bold"
      style={styleFunction(image)}
    >
      <Box px={4} py={6}>
        { contentFunction(children, image) }
      </Box>
      {bottomContent}
    </Box>
  )

  Component.propTypes = {
    image: PropTypes.string,
    bottomContent: PropTypes.node,
    children: PropTypes.node.isRequired,
  }

  Component.defaultProps = {
    image: "",
    bottomContent: <></>,
  }

  return Component;
}

const PageHeader = PageHeaderBase(
  (image) => ({ backgroundImage: image ? image : "none" }),
  (children) => <>{children}</>
)

const IconPageHeader = PageHeaderBase(
  () => ({}),
  (children, image) =>
    <HStack spacing={4}>
      <Image src={image} width="64px" height="64px" />
      <Box>
        {children}
      </Box>
    </HStack>
)

export default PageHeader
export { IconPageHeader }
