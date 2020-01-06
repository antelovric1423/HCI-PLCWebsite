/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Bubble = ({ children }) => {
  return (
    <div
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
