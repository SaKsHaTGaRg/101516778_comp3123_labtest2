export default function WeatherCard({ data }) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{data.name}</h2>

      <div className="temp-section">
        <img src={iconUrl} alt="weather icon" />
        <h1>{Math.round(data.main.temp)}°C</h1>
      </div>

      <p className="condition">{data.weather[0].description}</p>

      <div className="details">
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind: {data.wind.speed} m/s</p>
        <p>Pressure: {data.main.pressure} hPa</p>
      </div>
    </div>
  );
}
