import React from "react";

const Weather = props => (
  <div className="mt-3 md-3">
    {props.city && (
      <div className="row">
        <div className="col">
          <p>Местоположение:</p>
          <p>Время:</p>
          <p>Тумпература:</p>
          <p>Скорость ветра:</p>
          <p>Осадки:</p>
          <p>Давление:</p>
        </div>
        <div className="col">
          <p>{props.city}, {props.country}</p>
          <p>{props.time}</p>
          <p>{props.temperature}°c</p>
          <p> {props.wind_speed} км/ч</p>
          <p> {props.precip} мм</p>
          <p> {props.sunrise} мб</p>
        </div>
      </div>
    )}
    <p className="error">{props.error}</p>
  </div>
);

export default Weather;
