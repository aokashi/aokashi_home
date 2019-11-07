import React from 'react'
import PropTypes from 'prop-types'
import Note from './Note'

import styles from './AboutNote.module.sass'
import AboutIcon from '../../images/note_icon-about.png'

const AboutNote = ({ title, children, link, linkname }) => (
  <Note
    className={styles.aboutNote}
    icon={AboutIcon}
  >
    <div className={styles.content}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{children}</div>
      {
        link &&
          <div className={styles.link}>
            <a href={link}>{linkname ? linkname : title}</a>
          </div>
      }
    </div>
  </Note>
)

AboutNote.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  link: PropTypes.string,
  linkname: PropTypes.string,
}

export default AboutNote
