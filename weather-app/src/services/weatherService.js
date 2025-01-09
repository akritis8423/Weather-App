import axios from "axios";

const API_KEY = "694c278e97d079d9a79da007d5ae8dc2"; // Replace with your API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherByCity = async (city) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
};
