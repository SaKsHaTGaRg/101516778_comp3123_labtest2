import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./api/weather";

export default function App() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
  console.log("API KEY:", process.env.REACT_APP_WEATHER_KEY);

  try {
    setError("");
    const result = await fetchWeather(city, process.env.REACT_APP_WEATHER_KEY);
    console.log("RESULT:", result);
    setInfo(result);
  } catch (err) {
    console.log("ERROR:", err);
    setError("Unable to fetch weather for that city.");
    setInfo(null);
  }
};


  return (
    <div className="app-container">
      <h1 className="title">Weather Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {info && <WeatherCard data={info} />}
    </div>
  );


  
}
