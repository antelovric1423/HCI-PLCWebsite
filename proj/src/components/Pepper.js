import React from "react"
import PropTypes from "prop-types"
import Bubble from "../components/Bubble"

import "./layout.css"

const Pepper = ({ className, source, name, }) => {
    return (
        <Bubble className={className}>
            <img alt={name} src={source}
                style={{
                    width: "150px",
                    height: "150px",
                    marginBottom: "0px"
                }} />
            <div
                className="name"
                style={{
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
