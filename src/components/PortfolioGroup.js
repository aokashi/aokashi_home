import React from 'react'
import PropTypes from 'prop-types'

/**
 * 親要素が PortfolioList の場合にスタイルシートを付与したいため、CSSはPortfolioListと共用
 */
import styles from './PortfolioList.module.sass'

const PortfolioGroup = ({ name, children }) => (
  <div className={`${styles.group}`}>
    {name &&
      <div className={styles.title}>{name}</div>
    }
    <div className={`${styles.content} columns is-multiline`}>
      {children}
    </div>
  </div>
)

PortfolioGroup.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
}

export default PortfolioGroup
