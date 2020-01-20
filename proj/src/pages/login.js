import React from "react"

import Layout from "../components/layout"
import Bubble from "../components/Bubble"
import SEO from "../components/seo"

const Login = () => (
  <Layout>
    <SEO title="Log in" />

    <div style={{ display: "flex", justifyContent: "space-around" }}>

      <Bubble >

        <div style={{ display: "flex", justifyContent: "space-between", }}>
          <div> Username:
            <input id="usernameBox" type="text" placeholder="Somebody"
              style={{ marginLeft: "1.2rem" }} />
          </div>
        </div>

        <div style={{ paddingTop: "0.4rem", display: "flex", justifyContent: "space-between", }}>
          <div> Password:
            <input id="passwordBox" type="password" placeholder="Your Birthdate"
              style={{ marginLeft: "1.5rem" }} />
          </div>
        </div>

        <div style={{ paddingTop: "0.4rem", display: "flex", justifyContent: "center", }}>
          <button type="button" onClick={event => {
            let userName = document.getElementById("usernameBox").value;
            let password = document.getElementById("passwordBox").value;
            if (userName.length === 0) {
              alert("Invalid username!")
              return
            }
            if (password.length === 0) {
              alert("Invalid password!")
              return
            }

            alert("Invalid username and password combination!")
          }}
            style={{
              border: "1px solid #758764",
              borderRadius: "3px",
              padding: "0.5rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              backgroundColor: "#c4d1b8",
              cursor: "pointer"
            }}> Log in
          </button>
        </div>

        <div style={{
          paddingTop: "0.4rem", display: "flex", justifyContent: "center", alignContent: "center",
          alignItems: "center"
        }}>
          <div> If you don't have an account:
          </div>
          <button type="button" onClick={event => {
            alert("Closed for now!")
          }}
            style={{
              border: "0",
              color: "#758764",
              backgroundColor: "inherit",
              padding: "0.2rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              cursor: "pointer"
            }}> Sign up
          </button>
        </div>

      </Bubble>
    </div>
  </Layout>
)

export default Login
