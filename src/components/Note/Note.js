import React from 'react'
import PropTypes from 'prop-types';
import styles from './Note.module.sass'

const Note = ({ name, className, icon, children }) => (
  <div className={`${styles.note} ${className}`}>
    {
      icon &&
        <img className={styles.noteIcon} src={icon} alt={name}></img>
    }
    {children}
  </div>
)

Note.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
}

export default Note
