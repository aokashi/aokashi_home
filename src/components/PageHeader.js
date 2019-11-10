import React from 'react'
import PropTypes from 'prop-types'
import styles from './PageHeader.module.sass'
import { Link } from 'gatsby'

const PageHeader = ({ image, imageType, navItems, className, children }) => {
  const style = {
    backgroundImage: image ? image : 'none'
  }
  return (
    <header
      className={`${styles.pageHeader} ${className}`}
      style={style}
    >
      <div className={styles.container}>
        {
          (image && imageType === 'icon') && 
            <div className={styles.icon}>
              <img src={image} alt={''} className={styles.iconImage} />
            </div>
        }
        <div className={styles.content}>
          {children}
        </div>
      </div>
      {navItems &&
        <div className={styles.nav}>
          {
            navItems.map((link, linkIndex) => (
              <Link to={link.href} className={styles.navItem} activeClassName={styles.isActive} key={linkIndex}>{link.title}</Link>
            ))
          }
        </div>
      }
    </header>
  )
}

PageHeader.propTypes = {
  image: PropTypes.string,
  imageType: PropTypes.oneOf(['background', 'icon']),
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

PageHeader.defaultProps = {
  image: '',
  imageType: 'background',
  className: '',
  navItems: [],
}

export default PageHeader
