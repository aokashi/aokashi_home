import React from "react"

import { list } from "./PortfolioList.module.sass"

const PortfolioList = ({ children }) => (
  <div className={`${list}`}>
    {children}
  </div>
)

export default PortfolioList
