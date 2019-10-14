import React from 'react'
import PropTypes from 'prop-types'
import Box from './Box'

import styles from './MaterialBox.module.sass'

const MaterialBox = ({ materialItem, width, title, children }) => (
  <Box
    title={title}
    className={`${styles.materialBox} is-${width}`}
  >
    {children}
    {
      materialItem.tags &&
        <div className={styles.tags}>
          {
            materialItem.tags.map((tagItem, tagIndex) => (
              <span className={styles.tagItem} key={tagIndex}>{tagItem}</span>
            ))
          }
        </div>
    }
    {
      materialItem.description &&
        <p className={styles.description}>{materialItem.description}</p>
    }
  </Box>
)

MaterialBox.propTypes = {
  materialItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
  }),
  width: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
}

MaterialBox.defaultProps = {
  width: 'one-third',
  onItemClick: () => {},
}

export default MaterialBox
