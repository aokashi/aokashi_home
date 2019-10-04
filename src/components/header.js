import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AokashiHomeLogo from "../images/ah-logo_mini.png"
import styles from "./header.module.sass"

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      navBarClass: ''
    }
  }

  toggleNavBar = () => {
    this.setState(
      {
        isOpened: !this.state.isOpened,
      },
      () => {
        this.state.isOpened
          ? this.setState({
              navBarClass: styles.isOpened,
            })
          : this.setState({
              navBarClass: '',
            })
      }
    )
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={`${styles.container} container`}>
          <h1 className={styles.title}>
            <Link to="/">
              <img src={AokashiHomeLogo} alt={this.props.siteTitle} />
            </Link>
          </h1>
          <div className={styles.button}>
            <button className={styles.menuButton} onClick={() => this.toggleNavBar()}>Menu</button>
          </div>
          <nav className={`${styles.nav} ${this.state.navBarClass}`}>
            <Link to="/wwa/" className={styles.navItem} activeClassName={styles.isActive}>WWA</Link>
            <Link to="/software/" className={styles.navItem} activeClassName={styles.isActive}>Software</Link>
            <Link to="/material/" className={styles.navItem} activeClassName={styles.isActive}>Material</Link>
            <Link to="/portfolio/" className={styles.navItem} activeClassName={styles.isActive}>Portfolio</Link>
            <a href="http://aokashi.hatenablog.jp" className={styles.navItem}>Blog</a>
            <a href="https://www.wwafansq.com" className={styles.navItem}>WWA FanSquare</a>
          </nav>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
