import React from 'react'
import PropTypes from 'prop-types'

/**
 * 親要素が PortfolioList の場合にスタイルシートを付与したいため、CSSはPortfolioListと共用
 */
import styles from './PortfolioList.module.sass'

const PortfolioGroup = ({ name, children }) => (
  <div className={styles.group}>
    {name &&
      <div className="has-text-grey is-size-5 block">{name}</div>
    }
    <div className="columns is-multiline is-variable is-0-mobile is-5-tablet">
      {children}
    </div>
  </div>
)

PortfolioGroup.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
}

export default PortfolioGroup
