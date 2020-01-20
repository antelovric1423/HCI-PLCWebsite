import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Bubble = ({ className = "", children }) => {
  return (
    <div
      className={className}
      style={{
        margin: "1rem",
        backgroundColor: "#e2eadb",
        borderRadius: "5px",
        padding: "0.4rem",
      }}
    >
      {children}
    </div>
  )
}

Bubble.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Bubble
