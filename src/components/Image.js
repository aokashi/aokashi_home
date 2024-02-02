import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import { Image as ChakraImage } from "@chakra-ui/react"

/**
 * 文字列や Gatsby Image に対応できる画像コンポーネントです。
 */
const Image = ({ src, alt }) => {
  if (typeof src === "string") { // 文字列 → Chakra Image (img タグ)
    return <ChakraImage src={src} alt={alt} />
  }
  if (typeof src === "object") { // Object → Gatsby Image
    if (src.childImageSharp) {
      if (src.childImageSharp.gatsbyImageData !== undefined) {
        return <GatsbyImage image={src.childImageSharp.gatsbyImageData} alt={alt} />
      }
    }
  }
  return null
}

Image.defaultProps = {
  alt: "",
}

Image.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  alt: PropTypes.string,
}

export default Image
