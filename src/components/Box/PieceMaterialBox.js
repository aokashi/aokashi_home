import React from "react"
import PropTypes from "prop-types"
import { Box, VStack, Wrap } from "@chakra-ui/react"

import MaterialBox from "./MaterialBox"
import LinkButton from "../LinkButton"
import getFileName from "../../utils/getFileName"

const PieceMaterialBox = ({ materialItem }) => {
  let notes = []

  return (
    <MaterialBox
      width="half"
      title={materialItem.name}
      materialItem={materialItem}
    >
      <VStack alignItems="stretch">
        <Wrap>
          {
            materialItem.files.map((file, fileIndex) => {
              let noteSign = ""
              if (file.note) {
                notes.push(file.note)
                noteSign = <sup>{notes.length}</sup>
              }
              return (
                <span key={fileIndex}>
                  <a download={getFileName(file.path)} href={file.path}>
                    <img src={file.path} alt={file.alt} />
                  </a>
                  {noteSign}
                </span>
              )
            })
          }
        </Wrap>
        <ol>
          {
            notes.map((noteItem, noteIndex) => (
              <li key={noteIndex}>{noteItem}</li>
            ))
          }
        </ol>
        <Box textAlign="right">
          {
            materialItem.downloadFile &&
              <LinkButton href={materialItem.downloadFile}>ダウンロード</LinkButton>
          }
        </Box>
      </VStack>
    </MaterialBox>
  )
}

PieceMaterialBox.propTypes = {
  materialItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    files: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      alt: PropTypes.string,
      note: PropTypes.string,
    })),
    downloadFile: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    descrption: PropTypes.string,
  })
}

export default PieceMaterialBox
