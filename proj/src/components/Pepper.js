import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Bubble from "../components/Bubble"

import "./layout.css"
import "./pepper.css"

const Pepper = ({ className, source, name, link }) => {
    return (
        <Bubble className={className}>
            <Link
                to={link}
                padding="0"
                style={{
                    textDecoration: "none",
                    color: "inherit",
                }}>
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
            </Link>
        </Bubble>
    )
}

Pepper.propTypes = {
    source: PropTypes.node.isRequired,
    name: PropTypes.node.isRequired,
}

export default Pepper
