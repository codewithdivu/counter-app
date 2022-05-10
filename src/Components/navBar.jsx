import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="" className="navbar-brand">
        Navbar{"  "}
        <span
          style={{ backgroundColor: "grey" }}
          className="badge badge-primary"
        >
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
