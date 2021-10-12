import React, { useState } from "react";
import Cards from "./Cards/Cards.jsx";
import SearchBar from "./SearchBar/Searchbar.jsx";
import "./App.css";
import Stars from "./Stars/Stars.jsx";

function App() {
  const [cities, setCities] = useState([]);
  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_API}&units=metric`
    )
      .then((r) => r.json())
      .then((response) => {
        if (response.main !== undefined) {
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

          let found = false;
          for (let i = 0; i < cities.length; i++) {
            if (cities[i].name === res.name) {
              found = true;
              break;
            }
          }
          if (found) {
            alert("Selecciona otra ciudad");
          } else {
            setCities((oldCities) => [...oldCities, res]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className="App">
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="cardsContainer">
        <Stars />
        <Cards cities={cities} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
