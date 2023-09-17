import React from "react"
import DangerIcon from "../../images/note_icon-danger.png"
import { Alert, Box, Image } from "@chakra-ui/react"

const DangerNote = ({ children }) => (
  <Alert status="error">
    <Image src={DangerIcon} alt="警告" mr={3} />
    <Box>
      {children}
    </Box>
  </Alert>
)

export default DangerNote
