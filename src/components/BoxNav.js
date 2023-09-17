import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Link from "./Link"
import { Button, Wrap } from "@chakra-ui/react"

const BoxNav = ({ navItems }) => (
  <Wrap>
    {navItems.map((navItem) => (
      <Link href={navItem.link} key={navItem.link}>
        <Button
          leftIcon={navItem.fa ? (<FontAwesomeIcon icon={["fab", navItem.fa]} />) : undefined}
          variant="outline"
        >
          {navItem.name}
        </Button>
      </Link>
    ))}
  </Wrap>
)

BoxNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string,
      fa: PropTypes.string,
    })
  )
}

export default BoxNav
