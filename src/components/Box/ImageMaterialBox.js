import React from 'react'
import PropTypes from 'prop-types'

import MaterialBox from './MaterialBox'

const ImageMaterialBox = ({ materialItem, onItemClick }) => (
  <MaterialBox
    materialItem={materialItem}
    width="one-third"
  >
    <div onClick={onItemClick} className="block">
      <img src={materialItem.file} alt={materialItem.name} />
    </div>
    <div className="has-text-right block">
      <a download={materialItem.file} href={materialItem.file} className="button">ダウンロード</a>
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
