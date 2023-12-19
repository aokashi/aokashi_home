import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { HStack, Link as ChakraLink } from "@chakra-ui/react"
import { ClassNames } from "@emotion/react"

const PageHeaderNav = ({ navItems }) => (
  <HStack borderBottom="1px solid" borderColor="gray.800" justifyContent="center" spacing={3}>
    {navItems.map((link) =>
      <ClassNames>
        {({ css }) => (
          <ChakraLink
            as={Link}
            activeClassName={css({ borderBottom: '1px solid', borderColor: 'black' })}
            p={2}
            to={link.link}
          >
            {link.name}
          </ChakraLink>
        )}
      </ClassNames>
    )}
  </HStack>
)

PageHeaderNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
    })
  ),
}

export default PageHeaderNav
