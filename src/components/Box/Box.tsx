import React from "react"
import PropTypes from "prop-types"
import Link from "../Link"
import Image from "../Image"
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react"

const Box = ({ title, link, imagePath, onImageClick, width, className, children, footerContent }) => (
  <Card>
    {imagePath &&
      <div className="card-image has-text-centered has-background-light">
        <BoxLink href={link} onClick={onImageClick}>
          <Image src={imagePath} />
        </BoxLink>
      </div>
    }
    <CardHeader>
      {title &&
        <BoxLink onClick={() => {}} href={link}>
          <h3 className="card-header-title">{title}</h3>
        </BoxLink>
      }
    </CardHeader>
    <CardBody>
      {children}
    </CardBody>
    {footerContent && (
      <CardFooter>
        {footerContent}
      </CardFooter>
    )}
  </Card>
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
    return <div role="button" tabIndex={0} onClick={onClick} onKeyDown={onClick}>{children}</div>
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
  imagePath: Image.propTypes.src,
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
  imagePath: null,
  onImageClick: () => {},
  width: "one-quater",
  className: "",
}

export default Box
