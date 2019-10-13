import React from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.sass'

import CloseButtonIcon from '../images/button_icon-close.svg'

const Modal = ({ onOutsideClick, children }) => (
  <div className={styles.modal} onClick={onOutsideClick}>
    <img src={CloseButtonIcon} alt="" className={styles.closeButton} onClick={onOutsideClick} />
    <div className={styles.modalContent}>
      {children}
    </div>
  </div>
)

Modal.propTypes = {
  onOutsideClick: PropTypes.func,
  children: PropTypes.node
}

Modal.defaultProps = {
  onOutsideClick: () => {},
}

export default Modal
