import React from "react"
import PropTypes from "prop-types"

const Box = ({ title, imagePath, onImageClick, width, className, children }) => (
  <div className={`column is-${width}`}>
    <div className={`card ${className}`}>
      {imagePath &&
        <div className="card-image">
          <img src={imagePath} alt="" onClick={onImageClick} />
        </div>
      }
      {title &&
        <header className="card-header">
          <h3 className="card-header-title">{title}</h3>
        </header>
      }
      <div className="card-content">
        {children}
      </div>
    </div>
  </div>
)

Box.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
  onImageClick: PropTypes.func,
  width: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

Box.defaultProps = {
  title: "",
  imagePath: "",
  onImageClick: () => {},
  width: "one-quater",
  className: "",
}

export default Box
