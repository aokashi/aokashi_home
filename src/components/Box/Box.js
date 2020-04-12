import React from "react"
import PropTypes from "prop-types"
import Link from "../Link"

const Box = ({ title, link, imagePath, onImageClick, width, className, children, footerContent }) => (
  <div className={`column ${getWidth(width)}`}>
    <div className={`card ${className}`}>
      {imagePath &&
        <div className="card-image has-text-centered has-background-light">
          <BoxLink href={link} onClick={onImageClick}>
            <img src={imagePath} alt="" />
          </BoxLink>
        </div>
      }
      {title &&
        <header className="card-header">
          <BoxLink href={link}>
            <h3 className="card-header-title">{title}</h3>
          </BoxLink>
        </header>
      }
      <div className="card-content">
        {children}
      </div>
      {footerContent &&
        footerContent
      }
    </div>
  </div>
)

/**
 * Box 内でリンクの出力が必要な際に利用するコンポーネントです。
 * @param {Object} props href: リンク先, onClick: クリックイベント
 */
const BoxLink = ({ href, onClick, children }) => {
  if (href) {
    return <Link href={href}>{children}</Link>
  }
  if (onClick) {
    return <div role="button" tabIndex="0" onClick={onClick} onKeyDown={onClick}>{children}</div>
  }
  return <>{children}</>
}

/**
 * プロパティ width から Bulma の横幅用のクラス名に変えます。
 * @param {string|array} width 
 * @returns {string}
 */
function getWidth(width) {
  if (Array.isArray(width)) {
    return width.map(item => `is-${item}`).join(" ")
  }
  return `is-${width}`
}

Box.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  imagePath: PropTypes.string,
  onImageClick: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
  footerContent: PropTypes.node,
}

Box.defaultProps = {
  title: "",
  link: "",
  imagePath: "",
  onImageClick: () => {},
  width: "one-quater",
  className: "",
}

export default Box
