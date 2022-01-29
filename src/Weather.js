import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="sumbit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Saturday 07:00</li>
        <li>Snowstorm</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/snow_heavy.png"
            alt="Snowing"
          />
          -8°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 92%</li>
            <li>Humidity: 80%</li>
            <li>Wind: 21mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
