import React from "react"
import Note from "./Note"
import InfoIcon from "../../images/note_icon-info.png"

const InfoNote = ({ children }) => (
  <Note
    className="is-info"
    icon={InfoIcon}
  >{children}</Note>
)

export default InfoNote
