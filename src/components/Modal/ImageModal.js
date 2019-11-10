import React from 'react'
import PropTypes from 'prop-types'

import Modal from './Modal'

const ImageModal = ({ src, alt, name, description, onOutsideClick }) => (
  <Modal onOutsideClick={onOutsideClick}>
    <div className="has-text-white has-text-centered">
      <img src={src} alt={alt} />
      {name &&
        <p>{name}</p>
      }
      {description &&
        <p>{description}</p>
      }
    </div>
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
