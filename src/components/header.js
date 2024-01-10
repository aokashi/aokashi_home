import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { Box, ButtonGroup, Container, HStack, Spacer } from "@chakra-ui/react"
import LinkButton from "./LinkButton"

const Header = ({ siteTitle, siteNavItems, logoImage }) => (
  <Box as="header" bgColor="silver" borderBottom="2px solid" borderColor="brand.800">
    <Container>
      <HStack p={2}>
        <Link to="/">
          <GatsbyImage image={logoImage.childImageSharp.gatsbyImageData} alt={siteTitle} />
        </Link>
        <Spacer />
        <ButtonGroup colorScheme="gray" variant="ghost">
          {siteNavItems.map((navItem, navIndex) => 
            <LinkButton key={navIndex} href={navItem.link}>
              {navItem.name}
            </LinkButton>
          )}
        </ButtonGroup>
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
