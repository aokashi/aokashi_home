import React from "react"
import PropTypes from "prop-types"
import { Box, ButtonGroup, Container, DarkMode, Text, VStack } from "@chakra-ui/react"
import Link from "./Link"
import LinkButton from "./LinkButton"

type Props = {
  siteTitle: string
}

const Footer = ({ siteTitle }: Props) => (
  <Box as="footer" bgColor="silver.800" borderTop="2px solid" borderColor="brand.800">
    <Container>
      <VStack spacing={8} py={8}>
        <DarkMode>
          <ButtonGroup colorScheme="gray" spacing={4} variant="ghost">
            <LinkButton href="/">Home</LinkButton>
            <LinkButton href="/about/">当サイトについて</LinkButton>
            <LinkButton href="http://aokashi.hatenablog.jp">Blog</LinkButton>
            <LinkButton href="https://docs.aokashi.net">Docs</LinkButton>
            <LinkButton href="https://www.wwafansq.com">WWA FanSquare</LinkButton>
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
  siteTitle: PropTypes.string.isRequired,
}

export default Footer
