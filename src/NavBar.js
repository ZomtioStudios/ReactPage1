import accountIcon from "./images/accountIcon.jpg";
import { navlink, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import navStyle from "./NavStyle.scss";

const Pages = [
  { title: "home", route: "/home", id: 0 },
  { title: "about", route: "/about", id: 1 },
  { title: "contact", route: "/contact", id: 2 },
  { title: "help", route: "/help", id: 3 },
];

const navPages = Pages.map((Page) => (
  <NavLink
    to={Page.route}
    style={{ color: "rgb(162, 255, 80)", textDecoration: "none" }}
  >
    {Page.title}
  </NavLink>
));

export default function App() {
  return (
    <div
      className="NavBar"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0.8rem",
        width: "calc(100% - 10)",
        justifyContent: "space-between",
        borderRadius: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <h1
          style={{
            margin: 0,
            flexBasis: 120,
            fontSize: 23,
          }}
        >
          NavBar
        </h1>
        <nav
          className="navbar"
          style={{
            display: "flex",
            gap: "1rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: 17,
            fontWeight: 550,
          }}
        >
          {navPages}
        </nav>
      </div>
      <div
        className="account"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            style={{
              padding: "0.3rem 1rem",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#f0f0f0",
              cursor: "pointer",
              fontSize: 13,
            }}
          >
            Login
          </button>
          <button
            style={{
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#007bff",
              color: "white",
              cursor: "pointer",
              fontSize: 13,
            }}
          >
            Register
          </button>
        </div>
        <img src={accountIcon} style={{ height: 30, width: 30 }} />
      </div>
    </div>
  );
}
