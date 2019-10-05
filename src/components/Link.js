import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const LinkComponent = ({ href, className, activeClassName, style, children }) => {
  if (isExternalLink(href)) {
    return (
      <a href={href} className={className} style={style}>{children}</a>
    )
  } else {
    return (
      <Link to={href} className={className} activeClassName={activeClassName} style={style}>{children}</Link>
    )
  }
}

const isExternalLink = (link) => {
  return link.match(/https?:\/\//) !== null
}

LinkComponent.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
}

LinkComponent.defaultProp = {
  className: '',
  activeClassName: '',
  style: {},
}

export default LinkComponent
