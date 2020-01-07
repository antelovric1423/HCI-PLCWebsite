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
              backgroundColor: document.location.pathname === path ? "#c4d1b8" : "#e2eadb",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to={path}
            >
              {text}
            </Link>
          </div>
        ))}
      </div>)
}

export default Navigation
