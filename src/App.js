import React from "react";
import Card from "./Card/Card.jsx";
import SearchBar from "./SearchBar/Searchbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="cardsContainer">
        <Card />
      </div>
    </div>
  );
}

export default App;
