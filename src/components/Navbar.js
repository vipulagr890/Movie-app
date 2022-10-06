import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        color: "whitesmoke",
        height: "4rem",
        display: "flex",
        backgroundColor: "black",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ marginLeft: "2rem" }}>Movies App</h2>
      <div className="Navbar-links">
        <Link to="/">
          <h4 style={{ marginRight: "2rem" }}>Home</h4>
        </Link>
        <Link to="/favourite">
          <h4 style={{ marginRight: "2rem" }}>Favourite</h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
