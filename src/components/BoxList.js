import React from "react"

const BoxList = ({ className, children }) => (
  <div className={`columns is-multiline ${className}`}>
    {children}
  </div>
)

BoxList.defaultProps = {
  className: ""
}

export default BoxList
