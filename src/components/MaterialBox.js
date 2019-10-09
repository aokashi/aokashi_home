import React from 'react'
import PropTypes from 'prop-types'
import Box from './Box'

import styles from './MaterialBox.module.sass'

const MaterialBox = ({ materialItem }) => (
  <Box
    className="is-one-third"
  >
    <div className={styles.imageWrapper}>
      <img src={materialItem.file} alt={materialItem.name} className={styles.image} />
    </div>
    <div className={styles.buttons}>
      <a download={materialItem.file} href={materialItem.file} className={styles.downloadButton}>ダウンロード</a>
    </div>
    {
      materialItem.description &&
        <p className={styles.description}>{materialItem.description}</p>
    }
  </Box>
)

MaterialBox.propTypes = {
  materialItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    description: PropTypes.string,
  })
}

export default MaterialBox
