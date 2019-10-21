import React from 'react'

import styles from './PortfolioList.module.sass'

const PortfolioList = ({ children }) => (
  <div className={`${styles.list} columns is-multiline is-variable is-8`}>
    {children}
  </div>
)

export default PortfolioList
