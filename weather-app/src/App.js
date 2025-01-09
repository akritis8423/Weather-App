import React, { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import { getWeatherByCity } from "./services/weatherService";


const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">Weather App</h1>
      <WeatherSearch onSearch={handleSearch} />
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Error!</strong> {error}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
