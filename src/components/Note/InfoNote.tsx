import React from "react"
import InfoIcon from "../../images/note_icon-info.png"
import { Alert, Box, Image } from "@chakra-ui/react"
import { NoteProps } from "./types"

const InfoNote = ({ children }: NoteProps) => (
  <Alert status="info" my={6}>
    <Image src={InfoIcon} alt="情報" mr={3} />
    <Box>
      {children}
    </Box>
  </Alert>
)

export default InfoNote
