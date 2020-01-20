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
