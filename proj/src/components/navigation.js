import React from "react"
import { useMediaQuery } from "react-responsive"
import { useRef, useState } from "react"
import { Link } from "gatsby"
import more from "../images/more.svg"
import { useOnOutsideEvent } from "../hooks/index"

const NavLink = ({ ...prop }) => (
  <Link
    {...prop}
    style={{
      textDecoration: "none",
      color: "inherit",
      backgroundColor: "#e2eadb",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }}
    activeStyle={{
      backgroundColor: "#c4d1b8",
    }}
  ></Link>
)

const VisibleNavLink = ({ ...prop }) => {
  return (
    <NavLink
      {...prop}
      style={{
        mx: 2,
        px: 2,
      }}
    />
  )
}

const HiddenNavLink = ({ ...prop }) => {
  return (
    <NavLink
      {...prop}
      style={{
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "#e2eadb",
      }}
      activeStyle={{
        backgroundColor: "#c4d1b8",
      }}
    />
  )
}

const MoreButton = ({ onClick, width = 50 }) => (
  <div
    style={{
      display: "flex",
      flexShrink: 0,
      alignItems: "center",
      width,
      px: 3,
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <img
      src={more}
      style={{
        stroke: "red",
        width: "auto",
        maxHeight: "35px",
        margin: "0",
      }}
    />
  </div>
)

const VisibleItems = ({ visibleItems }) =>
  visibleItems.map(menuItem => (
    <VisibleNavLink key={menuItem.path} to={menuItem.path}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-between",
          height: "65px",
          paddingLeft: "0.25rem",
          paddingRight: "0.25rem",
        }}
      >
        {menuItem.text}
      </div>
    </VisibleNavLink>
  ))

const HiddenItems = ({
  menu,
  handleOutsideClick,
  minWidth = 120,
  zIndex = 999,
}) => {
  const { innerBorderRef } = useOnOutsideEvent(handleOutsideClick)
  return (
    <div
      ref={innerBorderRef}
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        border: "1px solid #85a368",
        borderTop: "0",
        top: "65px",
        p: 2,
        zIndex,
        minWidth,
      }}
    >
      {menu.map(menuItem => (
        <HiddenNavLink key={menuItem.path} to={menuItem.path}>
          {menuItem.text}
        </HiddenNavLink>
      ))}
    </div>
  )
}

const Nav = ({ menuItems }) => {
  const containerRef = useRef(null)
  const [open, setOpen] = useState(false)
  const showHidden = useMediaQuery({
    query: "(max-width: 899px)",
  })
  const showVisible = useMediaQuery({
    query: "(min-width: 900px)",
  })

  const handleMoreClick = () => setOpen(true)
  const handleOutsideClick = () => setOpen(false)

  return (
    <nav
      ref={containerRef}
      style={{
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "flex-end",
        flex: "auto",
        ml: [3, 4],
        overflowX: "auto",
      }}
    >
      {showVisible && <VisibleItems visibleItems={menuItems} />}
      {showHidden && <MoreButton onClick={handleMoreClick} />}
      {showHidden && open && (
        <HiddenItems menu={menuItems} handleOutsideClick={handleOutsideClick} />
      )}
    </nav>
  )
}

const Navigation = ({ menuItems }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      <Nav menuItems={menuItems} />
    </div>
  )
}

export default Navigation
