import React from "react";
import "../assets/css/app.css";
import { Header } from "../components/root/header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SearchBar } from "../components/searchBar/SearchBar";
import { Main } from "../components/root/main/Main";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <SearchBar />
        <Main />
      </div>
    </Router>
  );
};

export default App;
