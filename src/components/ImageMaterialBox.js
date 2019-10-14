import React from 'react'
import PropTypes from 'prop-types'

import styles from './ImageMaterialBox.module.sass'
import MaterialBox from './MaterialBox'

const ImageMaterialBox = ({ materialItem, onItemClick }) => (
  <MaterialBox
    materialItem={materialItem}
  >
    <div className={styles.imageWrapper} onClick={onItemClick}>
      <img src={materialItem.file} alt={materialItem.name} className={styles.image} />
    </div>
    <div className={styles.buttons}>
      <a download={materialItem.file} href={materialItem.file} className={styles.downloadButton}>ダウンロード</a>
    </div>
  </MaterialBox>
)

ImageMaterialBox.propTyes = {
  materialItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
  }),
  onItemClick: PropTypes.func
}

export default ImageMaterialBox
