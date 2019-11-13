import React from 'react'
import Note from './Note'
import DangerIcon from '../../images/note_icon-danger.png'

const DangerNote = ({ children }) => (
  <Note
    className="is-danger"
    icon={DangerIcon}
  >{children}</Note>
)

export default DangerNote
