import React from 'react'
import PropTypes from 'prop-types'

import styles from './Box.module.sass'

const Box = ({ title, className, children }) => (
  <div className={`column ${styles.box} ${className}`}>
    {
      title &&
        <h3 className={styles.boxTitle}>{title}</h3>
    }
    {children}
  </div>
)

Box.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

Box.defaultProps = {
  title: '',
  className: '',
}

export default Box
