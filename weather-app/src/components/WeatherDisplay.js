import React from "react";

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return null;
  }

  const { name, main, weather: weatherInfo, wind } = weather;

  return (
    <div className="card shadow-lg rounded-lg text-center">
      <div className="card-header bg-info text-white">
        <h2 className="card-title">{name}</h2>
      </div>
      <div className="card-body">
        <div className="my-3">
          <img
            src={`https://openweathermap.org/img/wn/${weatherInfo[0].icon}.png`}
            alt={weatherInfo[0].description}
            className="img-fluid"
          />
        </div>
        <p className="card-text">{weatherInfo[0].description}</p>
        <p className="h3">
          <strong>{main.temp}°C</strong>
        </p>
        <div className="d-flex justify-content-between mt-3">
          <div>
            <p><strong>Humidity:</strong> {main.humidity}%</p>
            <p><strong>Pressure:</strong> {main.pressure} hPa</p>
          </div>
          <div>
            <p><strong>Wind:</strong> {wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
