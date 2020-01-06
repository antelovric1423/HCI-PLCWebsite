import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bubble from "../components/Bubble"
import PostContent from "../components/PostContent"

const Posts = () => (
  <Layout>
    <SEO title="Home" />
    <Bubble>
      <h2 style={{ marginBottom: "0px" }}>Just received seeds in mail</h2>
      <p>from Ante Lovrić</p>
      <PostContent>
        <p style={{ marginBottom: "0px" }}>
          Ordered 15 varieties from whitehotpeppers.com and
          fataliiseeds.net, cant wait to grow them.
          </p>
      </PostContent>
    </Bubble>
    <Bubble>
      <h2 style={{ marginBottom: "0px" }}>Season almost over</h2>
      <p>from Ante Lovrić</p>
      <PostContent>
        <p style={{ marginBottom: "0px" }}>
          Picked all the ripe ones,
          there's plenty of green ones left though.
        </p>
      </PostContent>
    </Bubble>
  </Layout>
)

export default Posts
