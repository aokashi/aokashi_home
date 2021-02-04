import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="content has-text-centered">
      <nav className="buttons is-centered">
        <Link to="/" className="button is-dark">Home</Link>
        <Link to="/about/" className="button is-dark">当サイトについて</Link>
        <a href="http://aokashi.hatenablog.jp" className="button is-dark" target="_blank" rel="noopener noreferrer">Blog</a>
        <a href="https://docs.aokashi.net" className="button is-dark" target="_blank" rel="noopener noreferrer">Docs</a>
        <a href="https://www.wwafansq.com" className="button is-dark" target="_blank" rel="noopener noreferrer">WWA FanSquare</a>
      </nav>
      <div>
        <div>
          Copyright © 2010-{new Date().getFullYear()} {siteTitle}.
        </div>
        <div>
          Built with
            {` `}
          <a href="https://www.gatsbyjs.org" className="has-text-light" target="_blank" rel="noopener noreferrer">Gatsby</a>
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
