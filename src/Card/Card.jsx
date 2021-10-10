import React from "react";
import Styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.card}>
        <div className={Styles.divBtn}>
          <button className={Styles.btnContent}>x</button>
        </div>
        <span className={Styles.citie}>London</span>
        <div className={Styles.actual_Weather}>
          <img
            className={Styles.weatherImg}
            src=""
            width="80"
            height="80"
            alt=""
          />
          <div className={Styles.actualTempWeather}>
            <span>32°</span>
            <span className={Styles.weatherInfo}>Clouds</span>
          </div>
        </div>
        <div className={Styles.maxMin}>
          <div className={Styles.min}>
            <span>Min</span>
            <span>20°</span>
          </div>
          <div className={Styles.max}>
            <span>Max</span>
            <span>34°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
