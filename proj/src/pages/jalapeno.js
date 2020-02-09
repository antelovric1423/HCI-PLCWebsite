import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bubble from "../components/Bubble"
import Commentable from "../components/Commentable"

const Pepper = () => (
    <Layout>
        <SEO title="Jalapeno" />
        <Bubble>
            <Commentable likes="0">
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly"
                }}>
                    <img alt={"Jalapeno"} src={require("../images/Jalapeno.jpg")}
                        style={{
                            width: "150px",
                            height: "150px",
                            marginTop: "0.5rem",
                            marginBottom: "0px"
                        }} />
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        margin: "2rem",
                        marginTop: "0.5rem",
                        border: "1px solid #96a885"
                    }}>
                        <div style={{
                            padding: "0.5rem",
                            paddingTop: "0rem",
                            paddingRight: "1rem",
                            borderRight: "1px solid #96a885",
                            textAlign: "left"
                        }}>
                            <p style={{ marginBottom: "0.1rem" }}>Cultivar</p>
                            <p style={{ marginBottom: "0.1rem" }}>Species</p>
                            <p style={{ marginBottom: "0.1rem" }}>Origin</p>
                            <p style={{ marginBottom: "0.1rem" }}>Heat</p>
                            <p style={{ marginBottom: "0.1rem" }}>Ripens</p>
                        </div>
                        <div style={{ padding: "0.5rem", paddingTop: "0rem", textAlign: "left" }}>
                            <p style={{ marginBottom: "0.1rem" }}>Jalapeno</p>
                            <p style={{ marginBottom: "0.1rem" }}>Capsicum annuumm</p>
                            <p style={{ marginBottom: "0.1rem" }}>Mexico</p>
                            <p style={{ marginBottom: "0.1rem" }}>3500-3600 Scoville</p>
                            <p style={{ marginBottom: "0.1rem" }}>Green to red</p>
                        </div>
                    </div>
                </div>
                <p style={{ marginTop: "0.5rem", marginBottom: "0rem" }}>
                    The jalapeno is a mild and one of the most popular peppers around.
                    It is mostly eaten while it is still unripe (green), while the red ones are mostly smoked and dried.
                    Smoked red jalapenos are called chipotle. </p>
                <p style={{ marginTop: "0.5rem", marginBottom: "0rem", borderBottom: "1px solid #96a885", }}>
                    Jalapenos are used pickled, baked, stuffed with cheese and fried, raw in salsas,
                    and in an infinite number of ways in hot sauce. Chipotle is great as a seasoning and in hot sauce.</p>
            </Commentable>
        </Bubble>
    </Layout>
)

export default Pepper
