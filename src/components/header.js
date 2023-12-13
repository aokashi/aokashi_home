import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { Button, ButtonGroup, HStack, Spacer } from "@chakra-ui/react"

const Header = ({ siteTitle, siteNavItems, logoImage }) => (
  <HStack as="header" borderBottom="2px solid" borderColor="brand.800" bgColor="silver" py={2}>
    <Link to="/">
      <GatsbyImage image={logoImage.childImageSharp.gatsbyImageData} alt={siteTitle} />
    </Link>
    <Spacer />
    <ButtonGroup colorScheme="gray" variant="ghost">
      {siteNavItems.map((navItem, navIndex) => 
        <Button key={navIndex} as="a" href={navItem.link} target="_blank" rel="noopener noreferrer">
          {navItem.name}
        </Button>
      )}
    </ButtonGroup>
  </HStack>
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
