import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AokashiHomeLogo from "../images/ah-logo_mini.png"
import "./header.sass"

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      navBarClass: 'hidden'
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
              navBarClass: 'block',
            })
          : this.setState({
              navBarClass: 'hidden',
            })
      }
    )
  }

  render() {
    return (
      <header className="main-header">
        <div className="container">
          <h1 className="main-header__title">
            <Link to="/">
              <img src={AokashiHomeLogo} alt={this.props.siteTitle} />
            </Link>
          </h1>
          <div className="main-header__button">
            <button className="main-header__menu-button" onClick={() => this.toggleNavBar()}>Menu</button>
          </div>
          <nav className={`main-header__nav menu ${this.state.navBarClass}`}>
            <Link to="/wwa" className="menu__item">WWA</Link>
            <Link to="/software" className="menu__item">Software</Link>
            <Link to="/material" className="menu__item">Material</Link>
            <Link to="/portfolio" className="menu__item">Portfolio</Link>
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
