import React from 'react'
import PropTypes from 'prop-types'
import Note from './Note'

import AboutIcon from '../../images/note_icon-about.png'

const AboutNote = ({ title, children, link, linkname }) => (
  <Note
    className="is-success"
    title={title}
    icon={AboutIcon}
  >
    {children}
    {link &&
      <div>
        → <a href={link} className="link" target="_blank" rel="noopener noreferrer">{linkname ? linkname : title}</a>
      </div>
    }
  </Note>
)

AboutNote.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  link: PropTypes.string,
  linkname: PropTypes.string,
}

export default AboutNote
