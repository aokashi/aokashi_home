import React from 'react'
import PropTypes from 'prop-types'
import styles from './PageHeader.module.sass'

const PageHeader = ({ image, className, children }) => {
  const style = {
    backgroundImage: image ? image : 'none'
  }
  return (
    <header
      className={`${styles.pageHeader} ${className}`}
      style={style}
    >
      {children}
    </header>
  )
}

PageHeader.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default PageHeader
