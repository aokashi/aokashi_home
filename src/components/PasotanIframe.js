import React from "react"
import PropTypes from "prop-types"

const PasotanIframe = ({ elementId, id }) => {
  return (
    <>
      <iframe
        title={`pasotan_${elementId}`}
        id={`pasotan_${elementId}`}
        width="680"
        src={`https://pasotan.com/tools/builder/widget/partlist/v2/${id}`}
        frameborder="0">
      </iframe>
      <script src={`https://pasotan.com/tools/builder/widget/js?id=pasotan_${elementId}`} async></script>
    </>
  )
}

PasotanIframe.propTypes = {
  elementId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default PasotanIframe
