import React from "react"
import PropTypes from "prop-types"

import AboutIcon from "../../images/note_icon-about.png"
import { Alert, AlertDescription, AlertTitle, Box, Image } from "@chakra-ui/react"

const AboutNote = ({ title, children }) => (
  <Alert status="success">
    <Image src={AboutIcon} alt="解説" mr={3} />
    <Box>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Box>
  </Alert>
)

AboutNote.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default AboutNote
