import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import { Box, HStack, Heading, Image, SystemStyleObject } from "@chakra-ui/react"

type PropsBase = {
  image?: string,
  bottomContent?: ReactNode,
  children: ReactNode
}

const PageHeaderBase = (
  styleFunction: (image?: string) => SystemStyleObject,
  contentFunction: (children: ReactNode, image?: string) => ReactNode
): ((props: PropsBase) => ReactNode) => {
  const Component = ({ image, bottomContent, children }) => (
    <Box
      bgColor="silver.200"
      fontWeight="bold"
      sx={styleFunction(image)}
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

const BasicPageHeader = PageHeaderBase(
  () => ({}),
  (children) => <Heading as="h1" size="lg">{children}</Heading>
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
export { BasicPageHeader, IconPageHeader }
