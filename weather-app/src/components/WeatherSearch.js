import React, { useState } from "react";

const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-lg">
          <i className="bi bi-search"></i> Search
        </button>
      </div>
    </form>
  );
};

export default WeatherSearch;
