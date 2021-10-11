import React from "react";
import Styles from "./Card.module.css";
import Time from "../Timer/Timer";
export default function Card({
  min,
  max,
  name,
  img,
  onClose,
  id,
  temp,
  weather,
  timezone,
}) {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.card}>
        <div className={Styles.divBtn}>
          <button className={Styles.btnContent} onClick={onClose}>
            x
          </button>
        </div>
        <span className={Styles.citie}>{name}</span>
        <div className={Styles.actual_Weather}>
          <img
            className={Styles.weatherImg}
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="80"
            height="80"
            alt={`${img}`}
          />
          <div className={Styles.actualTempWeather}>
            <span>{temp.toFixed(1)}°</span>
            <span className={Styles.weatherInfo}>{weather}</span>
          </div>
        </div>
        <div className={Styles.maxMin}>
          <div className={Styles.min}>
            <span>Min</span>
            <span>{min.toFixed(1)}°</span>
          </div>
          <div className={Styles.max}>
            <span>Max</span>
            <span>{max.toFixed(1)}°</span>
          </div>
          <div className={Styles.time}>
            <Time timezone={timezone} />
          </div>
        </div>
      </div>
    </div>
  );
}
