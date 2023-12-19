import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box, Button, ButtonGroup, Container, VStack } from "@chakra-ui/react"

const Footer = ({ siteTitle }) => (
  <Box as="footer" bgColor="silver.700" borderTop="2px solid" borderColor="brand.800" color="white">
    <Container>
      <VStack spacing={8} py={8}>
        <ButtonGroup colorScheme="gray" spacing={4} variant="ghost">
          <Button as={Link} to="/">Home</Button>
          <Button as={Link} to="/about/">当サイトについて</Button>
          <Button as="a" href="http://aokashi.hatenablog.jp" target="_blank" rel="noopener noreferrer">Blog</Button>
          <Button as="a" href="https://docs.aokashi.net" target="_blank" rel="noopener noreferrer">Docs</Button>
          <Button as="a" href="https://www.wwafansq.com" target="_blank" rel="noopener noreferrer">WWA FanSquare</Button>
        </ButtonGroup>
        <Box textAlign="center">
          <div>
            Copyright © 2010-{new Date().getFullYear()} {siteTitle}.
          </div>
          <div>
            Built with
              {` `}
            <a href="https://www.gatsbyjs.org" className="has-text-light" target="_blank" rel="noopener noreferrer">Gatsby</a>
          </div>
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
