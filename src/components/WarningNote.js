import React from 'react'
import Note from './Note'
import styles from './WarningNote.module.sass'
import WarningIcon from '../images/note_icon-warning.png'

const WarningNote = ({ children }) => (
  <Note
    className={styles.warningNote}
    icon={WarningIcon}
  >{children}</Note>
)

export default WarningNote
