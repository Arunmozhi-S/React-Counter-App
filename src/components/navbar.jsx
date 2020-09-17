import React from "react";
import { BiCartAlt } from "react-icons/bi";
// Stateless functional components

const NavBar = ({ totalCounters }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <BiCartAlt size={32}/>
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    </>
  );
};

export default NavBar;
