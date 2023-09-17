import React from "react"
import WarningIcon from "../../images/note_icon-warning.png"
import { Alert, Box, Image } from "@chakra-ui/react"

const WarningNote = ({ children }) => (
  <Alert status="warning">
    <Image src={WarningIcon} alt="注意" mr={3} />
    <Box>
      {children}
    </Box>
  </Alert>
)

export default WarningNote
