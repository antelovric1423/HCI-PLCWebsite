/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuItems {
            path
            text
          }
        }
      }
    }
  `)
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        <header
          style={{
            backgroundColor: "#e2eadb",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "65px",
              flexShrink: "0"
            }}
          >
            <img src={require("../images/logo.jpg")}
              alt={"Logo"}
              height={"100%"}
              margin={"0"} />

            <div
              style={{
                textDecoration: "none",
                textDecorationColor: "#ff00ff",
                margin: "0 auto",
                display: "flex",
                height: "65px",
                alignContent: "center",
                alignItems: "center",
                minWidth: "165px"
              }}
            >
              <h2 style={{ marginBottom: "0px" }}>Pepper Enthusiast's</h2>
            </div>
          </div>

          <Navigation menuItems={data.site.siteMetadata.menuItems} />
        </header>

        <main
          style={{
            minHeight: "90vh",
            backgroundColor: "#f9fef8",
            paddingTop: "1px",
          }}
        >
          {children}
        </main>

        <footer
          style={{
            backgroundColor: "#e2eadb",
            textAlign: "center",
          }}
        >
          A HCI project - © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
