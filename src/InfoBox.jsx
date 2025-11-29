import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import './infoBox.css';

export default function InfoBox({info}) {
const init_URL="https://images.unsplash.com/photo-1601962986711-21760faddd7f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const HOT_URL="https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
const COLD_URL="https://images.unsplash.com/photo-1603726574752-a85dc808deab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const RAINY_URL="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?a=1&b=1&s=612x612&w=0&k=20&c=AqmeafeXtSEbnuq1mxdDr9nSrXunta3huhlXpLRMnes=";
    return (    
        <div className="infoBox">
            <h2><center>WeatherInfo-{info.title}</center></h2>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ info.temp <20
           ? COLD_URL
           : (info.humidity > 60
            ? HOT_URL : RAINY_URL )}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80
           ? <ThunderstormIcon />
           : (info.temp > 15 
            ? <SevereColdIcon /> : <SunnyIcon />)}
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span" textAlign="center">
         <div>Temp={info.temp}&deg;C</div>
        <div>Feels Like={info.feelslike}&deg;C</div>
        <div>Humidity={info.humidity}%</div>
        <div>Wind Speed={info.windspeed} km/h</div>
        <div>Temp Max={info.tempMax}&deg;C</div>
        <div>Temp Min={info.tempMin}&deg;C</div>
        <p>The Weather Can be described as feelslike {info.weather} {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    );
}