import React from 'react'
import PropTypes from 'prop-types'

import styles from './PortfolioGroup.module.sass'

const PortfolioGroup = ({ title, children }) => (
  <div className={`${styles.group}`}>
    <div className={styles.title}>{title}</div>
    <div className={`${styles.content} columns is-multiline is-variable is-8`}>
      {children}
    </div>
  </div>
)

PortfolioGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default PortfolioGroup
