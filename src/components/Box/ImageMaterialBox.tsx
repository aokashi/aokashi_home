import React from "react"
import PropTypes from "prop-types"

import MaterialBox, { MaterialItem } from "./MaterialBox"
import getFileName from "../../utils/getFileName"
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

type Props = {
  materialItem: MaterialItem,
  onItemClick: VoidFunction
};

const ImageMaterialBox = ({ materialItem, onItemClick }: Props) => (
  <MaterialBox
    materialItem={materialItem}
    imagePath={materialItem.file}
    onImageClick={onItemClick}
  >
    <Box textAlign="right">
      <ButtonGroup>
        <Button
          as="a"
          download={getFileName(materialItem.file)}
          href={materialItem.file}
          variant="outline"
        >
          ダウンロード
        </Button>
      </ButtonGroup>
    </Box>
  </MaterialBox>
)

ImageMaterialBox.propTyes = {
  materialItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
  }),
  onItemClick: PropTypes.func
}

export default ImageMaterialBox
