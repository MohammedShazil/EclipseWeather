import SearchBox from "./SearchBox";
import InfoBo from "./InfoBo";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "New York",
        feelsLike: 22,
        temp: 24,
        tempMin: 21,
        tempMax: 26,
        humidity: 55,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return ( 
        <div className="weather-app">
            <InfoBo info={weatherInfo} updateInfo={updateInfo} />
        </div>
    );
}
