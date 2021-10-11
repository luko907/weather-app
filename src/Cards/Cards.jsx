import React from "react";
import Card from "../Card/Card";

export default function Cards({ cities }) {
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
