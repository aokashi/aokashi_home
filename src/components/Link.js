import React from 'react'
import { Link } from 'gatsby'

const LinkComponent = ({ href, className, activeClassName, children }) => {
  if (isExternalLink(href)) {
    return (
      <a href={href} className={className}>{children}</a>
    )
  } else {
    return (
      <Link to={href} className={className}>{children}</Link>
    )
  }
}

const isExternalLink = (link) => {
  return link.match(/https?:\/\//) !== null
}

export default LinkComponent
