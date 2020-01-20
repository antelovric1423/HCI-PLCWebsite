import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bubble from "../components/Bubble"
import Commentable from "../components/Commentable"
import PostContent from "../components/PostContent"

const Posts = () => (
  <Layout>
    <SEO title="Home" />
    <Bubble>
      <Commentable likes="0">
        <h2 style={{ marginBottom: "0px" }}>2020 seeds planted!</h2>
        <p style={{ marginBottom: "0" }}>from Ante Lovrić</p>
        <PostContent>
          <p style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
            Planted 50 pots, waiting for seedlings to pop.
          </p>
        </PostContent>
      </Commentable>
    </Bubble>
    <Bubble>
      <Commentable likes="5">
        <h2 style={{ marginBottom: "0px" }}>Just received seeds in mail</h2>
        <p style={{ marginBottom: "0" }}>from Ante Lovrić</p>
        <PostContent>
          <p style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
            Ordered 15 varieties from whitehotpeppers.com and
            fataliiseeds.net, cant wait to grow them.
          </p>
        </PostContent>
      </Commentable>
    </Bubble>
    <Bubble>
      <Commentable likes="3">
        <h2 style={{ marginBottom: "0px" }}>Season almost over</h2>
        <p style={{ marginBottom: "0" }}>from Ante Lovrić</p>
        <PostContent>
          <p style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
            Picked all the ripe ones,
            there's plenty of green ones left though.
        </p>
        </PostContent>
      </Commentable>
    </Bubble>
  </Layout>
)

export default Posts
