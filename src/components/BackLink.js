import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Button, HStack, Image } from "@chakra-ui/react"

import ArrowIcon from "../images/button_icon-arrow.svg"

const BackLink = ({ to, children }) => (
  <HStack>
    <Button
      as={Link}
      leftIcon={<Image src={ArrowIcon} boxSize="24px" alt="" />}
      to={to}
      variant="ghost"
    >
      {children}
    </Button>
  </HStack>
)

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default BackLink
