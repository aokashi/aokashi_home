import React from "react"
import WarningIcon from "../../images/note_icon-warning.png"
import { Alert, Box, Image } from "@chakra-ui/react"
import { NoteProps } from "./types"

const WarningNote = ({ children }: NoteProps) => (
  <Alert status="warning" my={6} variant="outline">
    <Image src={WarningIcon} alt="注意" mr={3} />
    <Box>
      {children}
    </Box>
  </Alert>
)

export default WarningNote
