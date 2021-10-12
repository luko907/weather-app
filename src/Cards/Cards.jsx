import React from "react";
import Card from "../Card/Card";

export default function Cards({ cities, onClose }) {
  return (
    <div>
      {cities.map((cities, i) => (
        <Card
          temp={cities.temp}
          max={cities.max}
          min={cities.min}
          name={cities.name}
          weather={cities.weather}
          timezone={cities.timezone}
          img={cities.img}
          onClose={() => onClose(cities.id)}
          key={i}
          id={cities.id}
        />
      ))}
    </div>
  );
}
