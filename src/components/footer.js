import React from "react"
import PropTypes from "prop-types"
import "./footer.sass"

const Footer = ({ siteTitle }) => (
  <footer className="main-footer">
    <div className="container">
      <div className="main-footer__copyright">
        <div>
          Copyright © 2010-{new Date().getFullYear()} {siteTitle}.
        </div>
        <div>
          Built with
            {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </div>
  </footer>
)

Footer.prototype = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
