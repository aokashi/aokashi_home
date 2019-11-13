import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

const LinkButton = ({ href, children }) => (
  <div className="buttons is-centered block">
    <Link
      className="button"
      href={href}
    >{children}</Link>
  </div>
)

LinkButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
}

export default LinkButton
