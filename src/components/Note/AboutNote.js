import React from 'react'
import PropTypes from 'prop-types'
import Note from './Note'

import AboutIcon from '../../images/note_icon-about.png'

const AboutNote = ({ title, children }) => (
  <Note
    className="is-success"
    title={title}
    icon={AboutIcon}
  >
    {children}
  </Note>
)

AboutNote.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default AboutNote
