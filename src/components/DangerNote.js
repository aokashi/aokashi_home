import React from 'react'
import Note from './Note'
import styles from './DangerNote.module.sass'
import DangerIcon from '../images/note_icon-danger.png'

const DangerNote = ({ children }) => (
  <Note
    className={styles.dangerNote}
    icon={DangerIcon}
  >{children}</Note>
)

export default DangerNote
