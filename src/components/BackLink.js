import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "./BackLink.module.sass"
import ArrowIcon from "../images/button_icon-arrow.svg"

const BackLink = ({ to, children }) => (
  <div className="block is-size-5">
    <Link to={to}>
      <span className={`${styles.arrowIcon} icon`}>
        <img src={ArrowIcon} alt="" />
      </span>
      {children}
    </Link>
  </div>
)

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default BackLink
