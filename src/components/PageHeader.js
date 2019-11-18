import React from "react"
import PropTypes from "prop-types"
import styles from "./PageHeader.module.sass"

const PageHeaderBase = (styleFunction, contentFunction) => {
  const Component = ({ image, bottomContent, children }) => (
    <header
      style={styleFunction(image)}
      className={styles.pageHeader}
    >
      <div className={styles.content}>
        { contentFunction(children, image) }
      </div>
      {bottomContent}
    </header>
  )

  Component.propTypes = {
    image: PropTypes.string,
    bottomContent: PropTypes.node,
    children: PropTypes.node.isRequired,
  }

  Component.defaultProps = {
    image: "",
    bottomContent: <></>,
  }

  return Component;
}

const PageHeader = PageHeaderBase(
  (image) => ({ backgroundImage: image ? image : "none" }),
  (children) => <>{children}</>
)

const IconPageHeader = PageHeaderBase(
  () => ({}),
  (children, image) =>
    <div className="media">
      <div className="media-left">
        <div className="image is-64x64">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="media-content">
        {children}
      </div>
    </div>
)

export default PageHeader
export { IconPageHeader }
