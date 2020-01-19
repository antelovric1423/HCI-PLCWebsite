import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bubble from "../components/Bubble"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Bubble>
        <h2>Welcome</h2>
        <p>
          This website was created as a project for Human Computer Interaction
          course, it is inspired by the Pepper Lovers Community sites started
          by Khang Starr.
        </p>
        <p>
          The POSTS site is created to display all posts from the members of the
          community.
        </p>
        <p>
          The PEPPERS site contains information about various types of peppers.
        </p>
        <p>
          There is also a place to share your recipes, but to share your
          enthusiasm, you first have to log in.
        </p>
      </Bubble>

      <Bubble>
        <h2>Latest Announcement</h2>
        <p>Welcome to Human computer interaction.</p>
      </Bubble>

      <Bubble>
        <h2>The scoville scale</h2>
        <p>The scoville scale is the way heat levels in peppers are calculated,
          and the following image shows how the most popular peppers are placed on the scale.</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}>
          <img alt="ScovilleScale"
            src={require("../images/ScovilleScale.png")}
            style={{
            }} />
        </div>
      </Bubble>

    </Layout>
  )
}

export default IndexPage
