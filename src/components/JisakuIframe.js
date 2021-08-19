import React from "react"
import PropTypes from "prop-types"

const JisakuIframe = ({ elementId, id }) => {
  return (
    <>
      <iframe
        title={`pasotan_${elementId}`}
        id={`pasotan_${elementId}`}
        width="680"
        src={`https://jisaku.com/widget/partlist/${id}/l`}
        frameborder="0">
      </iframe>
      <script src={`https://jisaku.com/tools/builder/widget/js?id=pasotan_${elementId}`} async></script>
    </>
  )
}

JisakuIframe.propTypes = {
  elementId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default JisakuIframe
