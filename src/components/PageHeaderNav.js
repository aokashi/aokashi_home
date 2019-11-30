import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const PageHeaderNav = ({ navItems }) => (
  <div className="tabs is-centered">
    <ul>
      {
        /**
         * @todo Linkコンポーネントの activeClassName はLink自体しか付与されず、親属性の li 属性には付与できません。
         *     Link コンポーネントのAPIを調べれば、実現できるかもしれませんが、そのAPIの扱い方がわからないので、分かるまではこのまま放置で行きます。
         */
      }
      {navItems.map((link, linkIndex) =>
        <li key={linkIndex}>
          <Link to={link.link}>{link.name}</Link>
        </li>
      )}
    </ul>
  </div>
)

PageHeaderNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
    })
  ),
}

export default PageHeaderNav
