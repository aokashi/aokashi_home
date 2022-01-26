import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

/**
 * 文字列や Gatsby Image に対応できる画像コンポーネントです。
 */
const Image = ({ src, alt, className }) => {
  if (typeof src === "string") { // 文字列 → img タグ
    return <img src={src} alt={alt} className={className} />
  }
  if (typeof src === "object") { // Object → Gatsby Image
    if (src.childImageSharp) {
      if (src.childImageSharp.gatsbyImageData !== undefined) {
        return <GatsbyImage image={src.childImageSharp.gatsbyImageData} alt={alt} className={className} />
      }
    }
  }
  return <></>
}

Image.defaultProps = {
  alt: "",
  className: ""
}

Image.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  alt: PropTypes.string,
  className: PropTypes.string,
}

export default Image
