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
        <p>
          The MARKET is dedicated for trading/selling any of your products,
          directly from the person selling it (we do not officiate nor
          participate in any matter related, nor do we take responsibility).
        </p>
      </Bubble>

      <Bubble>
        <h2>Latest Announcement</h2>
        <p>Welcome to Human computer interaction.</p>
      </Bubble>

    </Layout>
  )
}

export default IndexPage
