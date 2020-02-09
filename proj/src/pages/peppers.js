import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pepper from "../components/Pepper"

const Peppers = () => {

  let pepperList = [
    { img: require("../images/BishopCrown.jpg"), name: "Bishop's Crown", link: "/jalapeno" },
    { img: require("../images/habanero.jpg"), name: "Habanero", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Jalapeno", link: "/jalapeno" },
    { img: require("../images/BlackPearl.jpg"), name: "Black Pearl", link: "/jalapeno" },
    { img: require("../images/NumexTwilight.jpg"), name: "Numex Twilight", link: "/jalapeno" },
    { img: require("../images/AjiCharapita.jpg"), name: "Aji Charapita", link: "/jalapeno" },
    { img: require("../images/JaysPeachGhostScorpion.jpg"), name: "Jay's Peach Ghost Scorpion", link: "/jalapeno" },
    { img: require("../images/BlackJalapeno.jpg"), name: "Black Jalapeno", link: "/jalapeno" },
    { img: require("../images/WhiteHabanero.jpg"), name: "White Habanero", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
    { img: require("../images/jalapeno.jpg"), name: "Placeholder", link: "/jalapeno" },
  ]
  return (
    <Layout>
      <SEO title="Peppers" />

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
        {pepperList.map(pepper => (
          <Pepper className="pepper" source={pepper.img} name={pepper.name} link={pepper.link} />
        ))}
      </div >
    </Layout>
  )
}

export default Peppers
