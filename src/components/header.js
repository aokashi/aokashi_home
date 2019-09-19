import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AokashiHomeLogo from "../images/ah-logo_mini.png"

const Header = ({ siteTitle }) => (
  <header className="main-header">
    <div className="container mx-auto">
      <h1 className="main-header__title">
        <Link to="/">
          <img src={AokashiHomeLogo} alt={siteTitle} />
        </Link>
      </h1>
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
