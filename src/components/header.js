import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AokashiHomeLogo from "../images/ah-logo_mini.png"
import styled from "styled-components"
import tw from "tailwind.macro"
import "./header.sass"

const MainHeader = styled.header`
  ${tw`bg-silver border-b-2 border-navy py-3`};
`

const Container = styled.div.attrs(props => ({
  className: "container",
}))`
  ${tw`flex items-center justify-between flex-wrap px-2`};
`

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      navBarClass: 'hidden lg:block'
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
              navBarClass: 'hidden lg:block',
            })
      }
    )
  }

  render() {
    return (
      <MainHeader>
        <Container>
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
        </Container>
      </MainHeader>
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
