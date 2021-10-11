import React, { useState } from "react";
import Cards from "./Cards/Cards.jsx";
import SearchBar from "./SearchBar/Searchbar.jsx";
import "./App.css";

function App() {
  const [cities, setCities] = useState([]);
  function onSearch(citie) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${citie}&appid=${process.env.REACT_APP_API}&units=metric`
    )
      .then((r) => r.json())
      .then((response) => {
        const res = {
          min: response.main.temp_min,
          max: response.main.temp_max,
          img: response.weather[0].icon,
          wind: response.wind.speed,
          temp: response.main.temp,
          name: response.name,
          weather: response.weather[0].main,
          clouds: response.clouds.all,
          latitud: response.coord.lat,
          timezone: response.timezone,
          longitud: response.coord.lon,
          id: response.id,
        };
        setCities((oldCities) => [...oldCities, res]);
      });
  }
  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      <div className="cardsContainer">
        <Cards cities={cities} />
      </div>
    </div>
  );
}

export default App;
