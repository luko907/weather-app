import React from "react";
import Cards from "./Cards/Cards.jsx";
import SearchBar from "./SearchBar/Searchbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="cardsContainer">
        <Cards />
      </div>
    </div>
  );
}

export default App;
