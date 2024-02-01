import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { HStack, Link as ChakraLink, Spacer } from "@chakra-ui/react"
import { ClassNames } from "@emotion/react"

type Props = {
  navItems: {
    link: string,
    name: string
  }[]
}

const PageHeaderNav = ({ navItems }: Props) => (
  <HStack
    borderBottom="1px solid"
    borderColor="gray.800"
    overflowX="auto"
    px={3}
    spacing={3}
    whiteSpace="nowrap"
  >
    <Spacer />
    <ClassNames>
      {({ css }) => {
        const activeClassName = css({ borderBottom: '1px solid', borderColor: 'black' });
        return navItems.map((link) =>
          <ChakraLink
            key={link.name}
            as={Link}
            activeClassName={activeClassName}
            color="brand.900"
            p={2}
            to={link.link}
          >
            {link.name}
          </ChakraLink>
        )
      }}
    </ClassNames>
    <Spacer />
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
