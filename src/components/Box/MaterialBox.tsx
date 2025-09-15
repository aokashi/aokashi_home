import React from "react"
import Box from "./Box"
import { Box as ChakraBox, HStack, Tag } from "@chakra-ui/react"

export type MaterialItem = {
  name: string,
  file: string,
  tags?: string[],
  description?: string,
  docsLink?: string,
}

type Props = {
  materialItem: MaterialItem,
  imagePath: string,
  onImageClick: VoidFunction,
  title?: string,
  children?: React.ReactNode,
}

// TODO 画像が縦長の場合は「クリックで全体を見る」ボタンを上の被せて表示したい
const MaterialBox = ({ materialItem, imagePath, onImageClick, title, children }: Props) => (
  <Box
    title={title}
    imagePath={imagePath}
    imageWrapper={(image) => (
      <ChakraBox textAlign="center" aspectRatio="1/1" overflowY="hidden">
        {image}
      </ChakraBox>
    )}
    onImageClick={onImageClick}
  >
    {children}
    {
      materialItem.tags &&
        <HStack spacing={2} py={2} wrap="wrap">
          {
            materialItem.tags.map((tagItem, tagIndex) => (
              <Tag key={tagIndex}>{tagItem}</Tag>
            ))
          }
        </HStack>
    }
    {
      materialItem.description &&
        <div className="ah-article">
          <p>{materialItem.description}</p>
        </div>
    }
  </Box>
)

export default MaterialBox
