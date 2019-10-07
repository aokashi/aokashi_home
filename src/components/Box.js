import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'
import styles from './Box.module.sass'

const Box = ({ title, className, navItems, children }) => (
  <div className={`column ${styles.box} ${className}`}>
    <h3 className={styles.boxTitle}>{title}</h3>
    {children}
    <div className={styles.boxNav}>
      {
        navItems.map(renderNavItem)
      }
    </div>
  </div>
)

const renderNavItem = (navItem, navIndex) => {
  if (navItem.isDownloadable) {
    return (
      <a href={navItem.link} download={navItem.link} className={styles.navItem} key={navIndex}>{navItem.name}</a>
    )
  }
  return (
    <Link href={navItem.link} className={styles.navItem} key={navIndex}>{navItem.name}</Link>
  )
}

Box.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string,
      isDownloadable: PropTypes.bool,
    })
  ),
  children: PropTypes.node,
}

Box.defaultProps = {
  title: '',
  className: '',
  navItems: []
}

export default Box
