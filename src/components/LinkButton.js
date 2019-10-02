import React from 'react'
import PropTypes from 'prop-types'
import styles from './LinkButton.module.sass'

const LinkButton = ({ href, children }) => (
  <a
    className={styles.linkButton}
    href={href}
  >{children}</a>
)

LinkButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
}

export default LinkButton
