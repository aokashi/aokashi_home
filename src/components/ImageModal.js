import React from 'react'
import PropTypes from 'prop-types'

import styles from './ImageModal.module.sass'
import Modal from './Modal'

const ImageModal = ({ src, alt, name, description, onOutsideClick }) => (
  <Modal onOutsideClick={onOutsideClick}>
    <div className={styles.imageWrapper}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
    {
      name &&
        <div className={styles.name}>{name}</div>
    }
    {
      description &&
        <div className={styles.description}>{description}</div>
    }
  </Modal>
)

ImageModal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  onOutsideClick: PropTypes.func,
}

ImageModal.defaultProps = {
  alt: '',
}

export default ImageModal
