import InfoBox from './InfoBox';
import SerachBox from './SearchBox';
import {useState} from 'react';
export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState({
        title: "Info Box Component",
    city: "Pune",
    feelslike:24.84,
    humidity: 65,
    windspeed: 3.6,
    tempMax: 28.5,
    tempMin: 21.0,
    temp: 26.3,
    weather: "Cloudy",
    });
    let updateWeatherData = (newinfo) => {
        setWeatherData(newinfo);
    }
    return (
        <div>
            <h1>Weather App Component</h1>
    <SerachBox updateWeatherData={updateWeatherData} />
    <InfoBox info={weatherData} />
        </div>
    );
}