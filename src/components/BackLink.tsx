import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Button, HStack, Image } from "@chakra-ui/react"

import ArrowIcon from "../images/button_icon-arrow.svg"

const BackLink = ({ to, children }) => (
  <HStack>
    <Link to={to}>
      <Button leftIcon={<Image src={ArrowIcon} boxSize="24px" alt="" />} variant="ghost">
        {children}
      </Button>
    </Link>
  </HStack>
)

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default BackLink
