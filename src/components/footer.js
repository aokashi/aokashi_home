import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Box, Button, ButtonGroup, Container, DarkMode, Text, VStack } from "@chakra-ui/react"
import Link from "../components/Link"

const Footer = ({ siteTitle }) => (
  <Box as="footer" bgColor="silver.800" borderTop="2px solid" borderColor="brand.800">
    <Container>
      <VStack spacing={8} py={8}>
        <DarkMode>
          <ButtonGroup colorScheme="gray" spacing={4} variant="ghost">
            <Button as={GatsbyLink} to="/">Home</Button>
            <Button as={GatsbyLink} to="/about/">当サイトについて</Button>
            <Button as="a" href="http://aokashi.hatenablog.jp" target="_blank" rel="noopener noreferrer">Blog</Button>
            <Button as="a" href="https://docs.aokashi.net" target="_blank" rel="noopener noreferrer">Docs</Button>
            <Button as="a" href="https://www.wwafansq.com" target="_blank" rel="noopener noreferrer">WWA FanSquare</Button>
          </ButtonGroup>
        </DarkMode>
        <Box color="white" textAlign="center">
          <Text>
            Copyright © 2010-{new Date().getFullYear()} {siteTitle}.
          </Text>
          <Text>
            Built with
              {` `}
            <Link href="https://www.gatsbyjs.org" _hover={{ color: 'brand.500' }} color="brand.100">Gatsby</Link>
          </Text>
        </Box>
      </VStack>
    </Container>
  </Box>
)

Footer.prototype = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
