import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

const LinkButton = ({ href, children }) => (
  <Link
    className={`button`}
    href={href}
  >{children}</Link>
)

LinkButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
}

export default LinkButton
