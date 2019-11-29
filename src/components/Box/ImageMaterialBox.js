import React from "react"
import PropTypes from "prop-types"

import MaterialBox from "./MaterialBox"
import getFileName from "../../utils/getFileName"

const ImageMaterialBox = ({ materialItem, onItemClick }) => (
  <MaterialBox
    materialItem={materialItem}
    imagePath={materialItem.file}
    onImageClick={onItemClick}
    width="one-third"
  >
    <div className="buttons is-right block">
      <a download={getFileName(materialItem.file)} href={materialItem.file} className="button">ダウンロード</a>
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
