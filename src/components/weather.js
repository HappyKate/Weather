import React from 'react'

const Weather = props => (
    <div className="infoWeath">
        { props.city &&
        <div>
            <p>Местоположение: {props.city}, {props.country}</p>
            <p>Время: {props.time}</p>
            <p>Тумпература: {props.temperature}°c</p>
            <p>Скорость ветра: {props.wind_speed} км/ч</p>
            <p>Осадки: {props.precip} мм</p>
            <p>Давление: {props.sunrise} мб</p>
        </div>
        }
        <p className="error">{props.error}</p>
    </div>);

export default Weather;