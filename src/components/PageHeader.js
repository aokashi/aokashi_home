import React from 'react'
import PropTypes from 'prop-types'
import styles from './PageHeader.module.sass'

const PageHeader = ({ image, imageType, className, children }) => {
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
    </header>
  )
}

PageHeader.propTypes = {
  image: PropTypes.string,
  imageType: PropTypes.oneOf(['background', 'icon']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

PageHeader.defaultProps = {
  image: '',
  imageType: 'background',
  className: '',
}

export default PageHeader
