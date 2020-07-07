import React from "react";
import "../../assets/css/searchBar.css";

export const SearchBar = () => {
  const grabF = () => {
    console.log("grab");
  };

  return (
    <div className="searchBar d-flex col">
      <div className="searchIcon ">
        <img
          src={require("../../assets/icons/searchIcon.png")}
          alt="searchIcon"
        />
      </div>
      <input type="text" placeholder="search" />

      <button
        type="button"
        className=" search-google-dropdown-button  dropdown-toggle"
      >
        <span>Google.com</span>
      </button>

      <button onClick={grabF} type="button" className=" grab-btn toggle">
        GRAB related keyword
      </button>
    </div>
  );
};
