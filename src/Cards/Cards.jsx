import React from "react";
import Card from "../Card/Card";

export default function Cards() {
  const cities = [
    {
      name: "London",
      temp: 28,
      min: 20,
      max: 35,
      weather: "Clouds",
      img: "https://cdn-icons-png.flaticon.com/512/990/990462.png",
      id: 1,
    },
    {
      name: "New York",
      temp: 22,
      min: 15,
      max: 27,
      weather: "Sunny",
      img: "https://cdn-icons-png.flaticon.com/512/2698/2698194.png",
      id: 2,
    },
  ];
  return (
    <div>
      {cities.map((cities, i) => (
        <Card
          temp={cities.temp}
          max={cities.max}
          min={cities.min}
          name={cities.name}
          weather={cities.weather}
          img={cities.img}
          key={i}
          id={cities.id}
        />
      ))}
    </div>
  );
}
