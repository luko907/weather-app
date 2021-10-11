import React from "react";
import Styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.card}>
        <div className={Styles.divBtn}>
          <button className={Styles.btnContent}>x</button>
        </div>
        <span className={Styles.citie}>{props.name}</span>
        <div className={Styles.actual_Weather}>
          <img
            className={Styles.weatherImg}
            src={props.img}
            width="80"
            height="80"
            alt={props.weather}
          />
          <div className={Styles.actualTempWeather}>
            <span>{props.temp}°</span>
            <span className={Styles.weatherInfo}>{props.weather}</span>
          </div>
        </div>
        <div className={Styles.maxMin}>
          <div className={Styles.min}>
            <span>Min</span>
            <span>{props.min}°</span>
          </div>
          <div className={Styles.max}>
            <span>Max</span>
            <span>{props.max}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
