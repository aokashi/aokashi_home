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
        navItems.map((navItem, navIndex) => (
          <Link href={navItem.link} className={styles.navItem} key={navIndex}>{navItem.name}</Link>
        ))
      }
    </div>
  </div>
)

Box.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
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
