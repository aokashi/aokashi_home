import React from 'react'

import styles from './PortfolioList.module.sass'

const PortfolioList = ({ children }) => (
  <div className={`${styles.list}`}>
    {children}
  </div>
)

export default PortfolioList
