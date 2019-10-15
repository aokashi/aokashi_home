import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './PortfolioItem.module.sass'

const PortfolioItem = ({ position, portfolioItem }) => {
  const positionClassName = position === 'left' ? styles.isLeft : styles.isRight

  return (
    <div className={`${styles.item} ${positionClassName} column is-half`}>
      <h3 className={styles.title}>
        <Link to={portfolioItem.path}>
          {portfolioItem.title}
        </Link>
      </h3>
      <div className={styles.dateWrapper}>
        <time datatime={portfolioItem.date} className={styles.date}>
          {portfolioItem.date}
        </time>
      </div>
      <div className={styles.tagList}>
        {
          portfolioItem.tags.map((tag, tagIndex) => (
            <span className={styles.tagItem} key={tagIndex}>{tag}</span>
          ))
        }
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  position: PropTypes.oneOf(['left', 'right']),
  portfolioItem: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

PortfolioItem.defaultProps = {
  position: 'left'
}

export default PortfolioItem
