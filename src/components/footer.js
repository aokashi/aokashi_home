import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./footer.sass"

const Footer = ({ siteTitle }) => (
  <footer className="main-footer">
    <div className="container">
      <nav className="main-footer__nav nav">
        <Link to="/" className="nav__item">Home</Link>
        <Link to="/about/" className="nav__item">当サイトについて</Link>
        <a href="http://aokashi.hatenablog.jp" className="nav__item">Blog</a>
        <a href="https://www.wwafansq.com" className="nav__item">WWA FanSquare</a>
      </nav>
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
