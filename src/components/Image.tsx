import React, { CSSProperties } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"
import { Image as ChakraImage } from "@chakra-ui/react"

interface Props {
  src: string | FileNode,
  alt?: string,
  style?: CSSProperties,
  chakraImageRef?: React.RefObject<HTMLImageElement>,
}

/**
 * 文字列や Gatsby Image に対応できる画像コンポーネントです。
 */
const Image = ({ src, alt = "", style, chakraImageRef }: Props) => {
  if (typeof src === "string") { // 文字列 → Chakra Image (img タグ)
    return <ChakraImage ref={chakraImageRef} src={src} alt={alt} style={style} />
  }
  if (typeof src === "object") { // Object → Gatsby Image
    if (src.childImageSharp) {
      if (src.childImageSharp.gatsbyImageData !== undefined) {
        return <GatsbyImage image={src.childImageSharp.gatsbyImageData} alt={alt} imgStyle={style} />
      }
    }
  }
  return null
}

export default Image
