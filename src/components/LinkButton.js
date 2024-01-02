import React from "react"
import PropTypes from "prop-types"

import Link from "./Link"
import { Button } from "@chakra-ui/react"

const LinkButton = ({ href, children }) => (
  <Button as={Link} href={href}>
    {children}
  </Button>
)

LinkButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
}

export default LinkButton
