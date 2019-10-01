import React from 'react'
import Note from './Note'
import styles from './InfoNote.module.sass'
import InfoIcon from '../images/note_icon-info.png'

const InfoNote = ({ children }) => (
  <Note
    className={styles.infoNote}
    icon={InfoIcon}
  >{children}</Note>
)

export default InfoNote
