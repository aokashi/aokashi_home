import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Img from "gatsby-image"

const Header = ({ siteTitle, siteNavItems, logoImage }) => (
  <header className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <Img fixed={logoImage.childImageSharp.fixed} alt={siteTitle} />
        </Link>
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
