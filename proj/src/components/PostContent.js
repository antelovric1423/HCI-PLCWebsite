/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const PostContent = ({ children }) => {
    return (
        <div
            style={{
                borderBottom: "1px solid #96a885",
                borderTop: "1px solid #96a885",
            }}
        >
            {children}
        </div>
    )
}

PostContent.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PostContent
