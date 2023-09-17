import React from "react"
import InfoIcon from "../../images/note_icon-info.png"
import { Alert, Box, Image } from "@chakra-ui/react"

const InfoNote = ({ children }) => (
  <Alert status="info">
    <Image src={InfoIcon} alt="情報" mr={3} />
    <Box>
      {children}
    </Box>
  </Alert>
)

export default InfoNote
