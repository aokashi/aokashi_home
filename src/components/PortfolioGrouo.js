import React from 'react'
import PropTypes from 'prop-types'

/**
 * 親要素が PortfolioList の場合にスタイルシートを付与したいため、CSSはPortfolioListと共用
 */
import styles from './PortfolioList.module.sass'

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
