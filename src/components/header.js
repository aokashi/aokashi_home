import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AokashiHomeLogo from "../images/ah-logo_mini.png"

const Header = ({ siteTitle, siteNavItems }) => (
  <header className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={AokashiHomeLogo} alt={siteTitle} width="256" height="48" />
        </Link>
        <strong>10周年!</strong>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          {siteNavItems.map((navItem, navIndex) => 
            <a href={navItem.link} target="_blank" rel="noopener noreferrer" className="navbar-item" key={navIndex}>{navItem.name}</a>
          )}
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteNavItems: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    name: PropTypes.string,
  }))
}

Header.defaultProps = {
  siteTitle: ``,
  siteNavItems: [],
}

export default Header
