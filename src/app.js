import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/ekoseli2/MyWeatherApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github{" "}
          </a>
          and{" "}
          <a
            href="https://ekrems-weather-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
