import { Box, ButtonGroup, Container, HStack, Hide, Spacer } from "@chakra-ui/react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import React from "react"

import LinkButton from "./LinkButton"

const Header = ({ siteTitle, siteNavItems, logoImage }) => (
  <Box as="header" bgColor="silver" borderBottom="2px solid" borderColor="brand.800">
    <Container>
      <HStack px={4} py={2}>
        <Link to="/">
          <GatsbyImage image={logoImage.childImageSharp.gatsbyImageData} alt={siteTitle} />
        </Link>
        <Spacer />
        <Hide below="md">
          <ButtonGroup colorScheme="gray" variant="ghost">
            {siteNavItems.map((navItem, navIndex) => 
              <LinkButton key={navIndex} href={navItem.link}>
                {navItem.name}
              </LinkButton>
            )}
          </ButtonGroup>
        </Hide>
      </HStack>
    </Container>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteNavItems: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    name: PropTypes.string,
  }))
}

Header.defaultProps = {
  siteTitle: ``,
  siteNavItems: [],
}

export default Header
