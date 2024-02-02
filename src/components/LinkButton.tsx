import React, { ReactNode } from "react"
import PropTypes from "prop-types"

import Link from "./Link"
import { Button, ButtonProps } from "@chakra-ui/react"

type Props = {
  href: string;
  children: ReactNode
} & ButtonProps

const LinkButton = ({ href, children, ...chakraProps }: Props) => (
  <Link href={href}>
    <Button {...chakraProps}>
      {children}
    </Button>
  </Link>
)

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default LinkButton
