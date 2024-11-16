import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState(() => {
    return localStorage.getItem("lastCity") || "Bengaluru";
  });
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeather();
  }, []);

  useEffect(() => {
    if (city) {
      localStorage.setItem("lastCity", city);
    }
  }, [city]);

  const cityHandler = (e) => {
    setCity(e.currentTarget.value);
  };

  const getWeather = async () => {
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${import.meta.env.VITE_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      setWeather(data);
    } catch (e) {
      setError(e.message);
      setWeather(null);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-slate-800 to-black-500">
        <div className="flex flex-col items-center justify-center rounded-lg bg-slate-600 bg-opacity-40 shadow-2xl shadow-black w-full md:w-[60%] lg:w-[45%] xl:w-[35%] h-auto max-w-lg p-8 backdrop-blur-md">
          <div className="gap-5 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white">Weather App</h1>
            <input
              type="text"
              onChange={cityHandler}
              value={city}
              className="bg-gray-50 border border-gray-300 p-4 bg-gray-600 bg-opacity-40 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="City..."
            />
            <button
              onClick={getWeather}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Search
              </span>
            </button>
          </div>

          <div className="text-center text-white">
            {error && <p className="text-red-500">Error: {error}</p>}
            {weather ? (
              <div>
                <h2 className="text-xl mb-2">{`Weather in ${city}`}</h2>
                <p className="text-lg">{`Temperature: ${weather.main.temp}° ${unit === "metric" ? "C" : "F"}`}</p>
                <p className="text-lg">{`Condition: ${weather.weather[0].description}`}</p>
                <p className="text-lg">{`Humidity: ${weather.main.humidity}%`}</p>
                <p className="text-lg">{`Wind Speed: ${weather.wind.speed} m/s`}</p>
                <p className="text-lg">{`Pressure: ${weather.main.pressure} hPa`}</p>
              </div>
            ) : (
              <p className="text-white">
                Enter a city and click "Search" to see the weather.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
