import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

/**
 * @see https://bulma.io/documentation/components/modal/
 */
const Modal = ({ onOutsideClick, children }) => (
  <div className="modal is-active" onClick={onOutsideClick}>
    <Helmet>
      <html className="is-clipped" />
    </Helmet>
    <div className="modal-background"></div>
    <div className="modal-content">
      {children}
    </div>
    <button className="modal-close is-large" onClick={onOutsideClick}></button>
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
