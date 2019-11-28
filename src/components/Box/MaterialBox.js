import React from "react"
import PropTypes from "prop-types"
import Box from "./Box"

const MaterialBox = ({ materialItem, imagePath, onImageClick, width, title, children }) => (
  <Box
    title={title}
    imagePath={imagePath}
    onImageClick={onImageClick}
    width={width}
  >
    {children}
    {
      materialItem.tags &&
        <div className="tags block">
          {
            materialItem.tags.map((tagItem, tagIndex) => (
              <span className="tag" key={tagIndex}>{tagItem}</span>
            ))
          }
        </div>
    }
    {
      materialItem.description &&
        <div className="content">
          <p>{materialItem.description}</p>
        </div>
    }
  </Box>
)

MaterialBox.propTypes = {
  materialItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
  }),
  imagePath: PropTypes.string,
  onImageClick: PropTypes.func,
  width: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default MaterialBox
