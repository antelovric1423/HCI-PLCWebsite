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
        style={{ marginTop: "1rem" }}
        id="searchbox"
        type="text"
        className="input"
        onKeyUp={event => {
          let textBox = document.getElementById("searchbox")
          let pepperContainer = document.getElementById("pepper-container");
          let peppers = pepperContainer.getElementsByClassName("pepper");
          for (let i = 0; i < peppers.length; i++) {
            let pepper = peppers[i]
            let pepperNameContainer = pepper.getElementsByClassName("name")[0];

            if (textBox.value.length === 0) {
              pepper.style.display = "inline"
              continue
            }

            let pepperName = pepperNameContainer.textContent.toLowerCase();
            let searchText = textBox.value.toLowerCase();

            if (pepperName.search(searchText) !== -1)
              pepper.style.display = "inline"
            else
              pepper.style.display = "none"
          }
        }
        }
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
      <Pepper className="pepper" source={require("../images/BishopCrown.jpg")} name="Bishop's Crown" />
      <Pepper className="pepper" source={require("../images/habanero.jpg")} name="Habanero" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Jalapeno" />
      <Pepper className="pepper" source={require("../images/BlackPearl.jpg")} name="Black Pearl" />
      <Pepper className="pepper" source={require("../images/NumexTwilight.jpg")} name="Numex Twilight" />
      <Pepper className="pepper" source={require("../images/AjiCharapita.jpg")} name="Aji Charapita" />
      <Pepper className="pepper" source={require("../images/JaysPeachGhostScorpion.jpg")} name="Jay's Peach Ghost Scorpion" />
      <Pepper className="pepper" source={require("../images/BlackJalapeno.jpg")} name="Black Jalapeno" />
      <Pepper className="pepper" source={require("../images/WhiteHabanero.jpg")} name="White Habanero" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />
      <Pepper className="pepper" source={require("../images/jalapeno.jpg")} name="Placeholder" />

    </div >
  </Layout>
)

export default Peppers
