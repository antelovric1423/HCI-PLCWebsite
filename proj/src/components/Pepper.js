import React from "react"
import PropTypes from "prop-types"
import Bubble from "../components/Bubble"

import "./layout.css"

const Pepper = ({ source, name, }) => {
    return (
        <Bubble>
            <img alt={name} src={source}
                style={{
                    width: "150px",
                    height: "150px",
                    marginBottom: "0px"
                }} />
            <div style={{
                width: "150px", textAlign: "center"
            }}>{name}</div>
        </Bubble>
    )
}

Pepper.propTypes = {
    source: PropTypes.node.isRequired,
    name: PropTypes.node.isRequired,
}

export default Pepper
