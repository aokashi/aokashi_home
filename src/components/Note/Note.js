import React from 'react'
import PropTypes from 'prop-types';

const Note = ({ name, title, className, icon, children }) => (
  <div className={`message block ${className}`}>
    {title &&
      <div className="message-header"><p>{title}</p></div>
    }
    <div className="message-body">
      <NoteContent icon={icon} name={name}>{children}</NoteContent>
    </div>
  </div>
)

const NoteContent = ({ icon, name, children }) => {
  if (icon) {
    return (
      <div className="media">
        <div className="media-left">
          <img src={icon} alt={name}></img>
        </div>
        <div className="media-content">
          {children}
        </div>
      </div>
    )
  }
}

Note.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
}

export default Note
