import React from "react"
import PropTypes from "prop-types"

const Box = ({ title, width, className, children }) => (
  <div className={`column is-${width}`}>
    <div className={`card ${className}`}>
      {
        title &&
          <p className="card-header">
            <h3 className="card-header-title">{title}</h3>
          </p>
      }
      <div className="card-content">
        {children}
      </div>
    </div>
  </div>
)

Box.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

Box.defaultProps = {
  title: "",
  width: "one-quater",
  className: "",
}

export default Box
