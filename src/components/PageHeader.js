import React from "react"
import PropTypes from "prop-types"
import styles from "./PageHeader.module.sass"
import { Link } from "gatsby"

const PageHeader = ({ image, imageType, navItems, className, children }) => {
  const style = {
    backgroundImage: image ? image : "none"
  }
  return (
    <header
      className={`${styles.pageHeader} block ${className}`}
      style={style}
    >
      <div className="media">
        {(image && imageType === "icon") && 
          <div className="media-left">
            <div className="image is-64x64">
              <img src={image} alt="" />
            </div>
          </div>
        }
        <div className="media-content">
          {children}
        </div>
      </div>
      {navItems.length > 0 &&
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
      }
    </header>
  )
}

PageHeader.propTypes = {
  image: PropTypes.string,
  imageType: PropTypes.oneOf(["background", "icon"]),
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

PageHeader.defaultProps = {
  image: "",
  imageType: "background",
  className: "",
  navItems: [],
}

export default PageHeader
