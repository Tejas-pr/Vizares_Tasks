# Weather App - API Integration and Display Component

## Objective

This React-based Weather App fetches and displays weather data from the OpenWeatherMap API. It allows users to search for a city and view weather details such as temperature, humidity, wind speed, and more. The app is styled with Tailwind CSS and supports dynamic updates and error handling.

## Features

- Fetches weather data from the OpenWeatherMap API.
- Displays temperature, condition, humidity, wind speed, pressure.
- Responsive design using Tailwind CSS.
- Error handling in case of failed API requests.
- Saves the last searched city in `localStorage`.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your OpenWeatherMap API key in .env:
   ```bash
   VITE_API_KEY=your-api-key-here
   ```
4. Start the app:
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 to view the app.

## API Integration

The app fetches weather data from : https://api.openweathermap.org/data/2.5/weather?q={city}&units={unit}&appid={API_KEY}

- city: Name of the city.
- unit: Metric (Celsius) or Imperial (Fahrenheit).
- appid: Your OpenWeatherMap API key.

#

Thank You! 👋
