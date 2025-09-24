import React from "react"
import Box from "./Box"
import { HStack, Tag } from "@chakra-ui/react"

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

const MaterialBox = ({ materialItem, imagePath, onImageClick, title, children }: Props) => (
  <Box
    title={title}
    imagePath={imagePath}
    truncateImage
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
