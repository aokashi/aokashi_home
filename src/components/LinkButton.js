import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'
import styles from './LinkButton.module.sass'

const LinkButton = ({ href, children }) => (
  <Link
    className={styles.linkButton}
    href={href}
  >{children}</Link>
)

LinkButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
}

export default LinkButton
