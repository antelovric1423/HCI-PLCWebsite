import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Commentable = ({ likes = 0, comments = 0, children }) => {
    return (
        <>
            <div>{children}</div>
            <div style={{ borderTop: "1px " }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                    <div>Likes: {likes}</div>
                    <div>Comments: {comments}</div>
                </div>
                <div>
                    <input style={{ marginTop: "1rem", width: "100%" }}
                        id="searchbox"
                        type="text"
                        className="input"
                        placeholder="Log in to comment"
                        onKeyUp={event => {
                            let box = event.target
                            alert("You have to log in to comment!")
                            box.value = ""
                        }} />
                </div>
            </div>
        </>
    )
}

Commentable.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Commentable
