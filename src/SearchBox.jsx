import  { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function SearchBox({updateWeatherData}) {
     let [city, setCity] = useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="b271ebe7f9f43e565992c82490fcffcd";
   
    let getWeatherInfo = async() => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
         
        let result = {
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            weatherType: jsonResponse.weather[0].main,
            city: jsonResponse.name,
            feelslike: jsonResponse.main.feels_like,
            windspeed: jsonResponse.wind.speed,
            country: jsonResponse.sys.country,
            sunriseTime: jsonResponse.sys.sunrise,
            sunsetTime: jsonResponse.sys.sunset,
        };
        console.log(result);
        return result;
    };
    let handleChange = (e) => {
        setCity(e.target.value);
    }
    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        setCity("")
         let newinfo = await getWeatherInfo();
            updateWeatherData(newinfo);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City" variant="outlined"  required  value={city} onChange={handleChange} />
                <Button variant="contained" type="submit">Search </Button>
            </form>
        </div>
    );
}