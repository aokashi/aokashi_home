import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import { Link as ChakraLink, ChakraProps } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

type Props = {
  href: string;
  title?: string;
  // TODO 本当は style オブジェクト形式にしたかったが、 emotion の ClassNames から供給される css 関数の引数の型が分からず断念
  activeClassName?: string;
  children: ReactNode;
} & ChakraProps;

const LinkComponent = ({ href, title, activeClassName, children, ...chakraProps }: Props) => {
  if (isExternalLink(href)) {
    return (
      <ChakraLink href={href} title={title} target="_blank" rel="noopener noreferrer" {...chakraProps}>{children}</ChakraLink>
    )
  } else {
    return (
      <ChakraLink as={GatsbyLink} to={href} title={title} activeClassName={activeClassName} {...chakraProps}>{children}</ChakraLink>
    )
  }
}

const isExternalLink = (link: string) => {
  return link.match(/https?:\/\//) !== null
}

LinkComponent.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node,
}

LinkComponent.defaultProp = {
  activeClassName: "",
}

export default LinkComponent
