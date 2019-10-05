import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from "./footer.module.sass"

const Footer = ({ siteTitle }) => (
  <footer className={`footer ${styles.footer}`}>
    <div className="container">
      <nav className={styles.footerNav}>
        <Link to="/" className={styles.footerNavItem}>Home</Link>
        <Link to="/about/" className={styles.footerNavItem}>当サイトについて</Link>
        <a href="http://aokashi.hatenablog.jp" className={styles.footerNavItem}>Blog</a>
        <a href="https://www.wwafansq.com" className={styles.footerNavItem}>WWA FanSquare</a>
      </nav>
      <div className={styles.footerCopyright}>
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
