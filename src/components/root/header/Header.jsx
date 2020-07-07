import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/header.css";

export const Header = () => {
  return (
    <header className="d-flex ">
      <div className=" header-logo">
        <Link to={""}>Logo</Link>
      </div>
      <nav className="header-nav d-flex flex-wrap justify-content-between">
        <Link to={""}>RELATED</Link>
        <Link to={""}>DOMAIN</Link>
        <Link to={""}>CLUSTER</Link>
        <Link to={""}>STRUCTURE</Link>
        <Link to={""}>LSI</Link>
        <Link to={""}>ENTITIES</Link>
        <Link to={""}>WRITER REPORT</Link>
      </nav>
      <div className="header-end-element  d-flex justify-content-end ">
        <span className="dropdown-toggle font-weight-bold">Name Surname</span>
      </div>
    </header>
  );
};
