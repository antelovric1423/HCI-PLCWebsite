import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pepper from "../components/Pepper"

const Peppers = () => (
  <Layout>
    <SEO title="Home" />

    <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
      <input
        style={{ marginTop: "0.4rem" }}
        id="searchbox"
        type="text"
        className="input"
        placeholder="Search peppers..." />
    </div>

    <div
      id="pepper-container"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
      }}>
      <Pepper source={require("../images/BishopCrown.jpg")} name="Bishop's Crown" />
      <Pepper source={require("../images/habanero.jpg")} name="Habanero" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Jalapeno" />
      <Pepper source={require("../images/BlackPearl.jpg")} name="Black Pearl" />
      <Pepper source={require("../images/NumexTwilight.jpg")} name="Numex Twilight" />
      <Pepper source={require("../images/AjiCharapita.jpg")} name="Aji Charapita" />
      <Pepper source={require("../images/JaysPeachGhostScorpion.jpg")} name="Jay's Peach Ghost Scorpion" />
      <Pepper source={require("../images/BlackJalapeno.jpg")} name="Black Jalapeno" />
      <Pepper source={require("../images/WhiteHabanero.jpg")} name="White Habanero" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper source={require("../images/jalapeno.jpg")} name="Placeholder" />

    </div >
  </Layout>
)

export default Peppers
