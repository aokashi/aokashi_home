import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

/**
 * 文字列や Gatsby Image に対応できる画像コンポーネントです。
 */
const Image = ({ src, alt, className }) => {
  if (typeof src === "string") { // 文字列 → img タグ
    return <img src={src} alt={alt} className={className} />
  }
  if (typeof src === "object") { // Object → Gatsby Image
    if (src.childImageSharp) {
      if (src.childImageSharp.fluid !== undefined) {
        return <Img fluid={src.childImageSharp.fluid} alt={alt} className={className} />
      }
      else if (src.childImageSharp.fixed !== undefined) {
        return <Img fixed={src.childImageSharp.fixed} alt={alt} className={className} />
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
