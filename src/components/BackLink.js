import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './BackLink.module.sass'

const BackLink = ({ to, children }) => (
  <Link to={to} className={styles.backLink}>{children}</Link>
)

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default BackLink