import "./InfoBox.css";
import SearchBox from "./SearchBox";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const getWeatherImage = (weather, temp) => {
    if (temp !== undefined && temp < 0) {
        return "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }

    const weatherImages = {
        "clear sky": "https://images.unsplash.com/photo-1603729287771-e03b8ac6ebf5?q=80&w=2071&auto=format&fit=crop",
        "haze": "https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?q=80&w=2061&auto=format&fit=crop",
        "mist": "https://images.unsplash.com/photo-1543968996-ee822b8176ba?q=80&w=2128&auto=format&fit=crop",
        "rain": "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop",
        "clouds": "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=2070&auto=format&fit=crop",
        "smoke": "https://images.unsplash.com/photo-1678285444821-95ed011c2ab4?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    return weatherImages[weather] || "https://images.unsplash.com/photo-1617141870574-82529c331676?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
};

export default function InfoBo({ info, updateInfo }) {
    if (!info) return null;

    const { city, temp, feelsLike, humidity, tempMin, tempMax, weather } = info;
    const weatherImage = getWeatherImage(weather, temp);

    return (
        <div className="info-box" style={{ backgroundImage: `url(${weatherImage})` }}>
            <div className="info-overlay">
                <h1 className="app-title">EclipseWeather</h1>
                <SearchBox updateInfo={updateInfo} />
                <div className="weather-details">
                    <h2 className="city-name">{city}</h2>
                    <p className="weather-condition">{weather}</p>
                    <div className="detail-item"><ThermostatIcon /> Temperature: {temp}°C</div>
                    <div className="detail-item"><AirIcon /> Feels Like: {feelsLike}°C</div>
                    <div className="detail-item"><WaterDropIcon /> Humidity: {humidity}%</div>
                    <div className="detail-item"><WbSunnyIcon /> Min Temp: {tempMin}°C</div>
                    <div className="detail-item"><WbSunnyIcon /> Max Temp: {tempMax}°C</div>
                </div>
            </div>
        </div>
    );
}

