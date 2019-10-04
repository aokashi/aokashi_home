import React from 'react'

const BoxList = ({ className, children }) => (
  <div className={`columns is-multiline ${className}`}>
    {children}
  </div>
)

export default BoxList
