import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import SEO from "../seo"

/**
 * @see https://bulma.io/documentation/components/modal/
 */
const Modal = ({ onOutsideClick, children }) => (
  <div className="modal is-active">
    <Helmet>
      <html lang={SEO.defaultProps.lang} className="is-clipped" />
    </Helmet>
    <div className="modal-background"></div>
    <div className="modal-content">
      {children}
    </div>
    <button className="modal-close is-large" aria-label="close" onClick={onOutsideClick}></button>
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
