import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AokashiHomeLogo from "../images/ah-logo_mini.png"

const Header = ({ siteTitle }) => (
  <header className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={AokashiHomeLogo} alt={siteTitle} width="256" height="48" />
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
