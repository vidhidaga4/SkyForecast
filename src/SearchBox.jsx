import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo,errorInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const apikey=import.meta.env.VITE_REACT_APP_API_KEY;
    console.log(apikey);
    
    let capitalizeWords = (city) =>{
        return city.split(' ')
        .map(word => word[0]?.toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }
    let getWeatherInfo= async() => {
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${apikey}&units=metric`);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result={
              city:capitalizeWords(city),
              temp: jsonResponse.main.temp,
              tempMin: jsonResponse.main.temp_min,
              tempMax: jsonResponse.main.temp_max,
              humidity: jsonResponse.main.humidity,
              feelsLike: jsonResponse.main.feels_like,
              weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            setError(false);
            return result;
        }
        catch(err){
            throw err;
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    
    }
    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} 
                required />
                <br></br><br></br>
                <Button variant="contained" type="submit">Search</Button>
                {error ? errorInfo(true) : errorInfo(false)} 
            </form>
        </div>
    );
}