export async function fetchWeather(city, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
}
