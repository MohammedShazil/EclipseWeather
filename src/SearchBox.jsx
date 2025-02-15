import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const getWeatherInfo = async () => {
    setLoading(true);
    try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        return result;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    } finally {
        setLoading(false);
    }
};


    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (!city.trim()) return;
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
        }
        setCity("");
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a city..."
                    value={city}
                    onChange={handleChange}
                    className="search-input"
                />
                <button type="submit" className="search-button" disabled={loading}>
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    );
}
