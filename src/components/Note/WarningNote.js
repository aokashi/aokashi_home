import React from 'react'
import Note from './Note'
import WarningIcon from '../../images/note_icon-warning.png'

const WarningNote = ({ children }) => (
  <Note
    className="is-warning"
    icon={WarningIcon}
  >{children}</Note>
)

export default WarningNote
