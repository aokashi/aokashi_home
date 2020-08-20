import React from "react"
import PropTypes from "prop-types"
import Box from "./Box"
import GatsbyImage from "gatsby-image"

const MaterialBox = ({ materialItem, imageFluid, onImageClick, width, title, children }) => (
  <Box
    title={title}
    imageFluid={imageFluid}
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
  imageFluid: GatsbyImage.propTypes.fluid,
  onImageClick: PropTypes.func,
  width: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default MaterialBox
