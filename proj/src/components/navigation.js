import React from "react"
import { Link } from "gatsby"

const Navigation = ({ menuItems }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {menuItems.map(({ path, text }, i) => (
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
            backgroundColor: "#e2eadb",
          }}
          activeStyle={{
            backgroundColor: "#c4d1b8",
          }}
          to={path}
        >
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-between",
              height: "65px",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
          >
            {text}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Navigation
