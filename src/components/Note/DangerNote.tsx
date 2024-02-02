import React from "react"
import DangerIcon from "../../images/note_icon-danger.png"
import { Alert, Box, Image } from "@chakra-ui/react"
import { NoteProps } from "./types"

const DangerNote = ({ children }: NoteProps) => (
  <Alert status="error" my={6} variant="outline">
    <Image src={DangerIcon} alt="警告" mr={3} />
    <Box>
      {children}
    </Box>
  </Alert>
)

export default DangerNote
