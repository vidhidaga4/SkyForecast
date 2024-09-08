import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css"
import ErrorIcon from '@mui/icons-material/Error';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({
       city:undefined,
       feelslike:undefined,
       temp:undefined,
       tempMin:undefined,
       tempMax:undefined,
       humidity:undefined,
       weather:undefined,

    })
    const [error, setError] = useState(false); 

    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }

    let errorInfo = (result) =>{  
        setError(result);
    }

    const h2Style = {
        fontSize: "2rem",
        color: "black",
        margin: "2rem 0",
        fontFamily: "cursive",
        textShadow: "1px 1px 2px rgba(0,0,0,0.2)"
    };
    return (
        <div style={{textAlign:"center", marginTop:"50px"}}>
            <h2 style={h2Style}>SkyForecast</h2>
            <SearchBox updateInfo={updateInfo} errorInfo={errorInfo}/>
            {error ? (
                 <div className="error-container">
                    <ErrorIcon
                    sx={{fontSize: '50px',
                        opacity:"0.8",
                        color:"white",
                        marginBottom:"20px"

                    }}
                    />
                    <p>Oops! Place not found.</p>
                </div>
            ) : (
                <InfoBox info={weatherInfo} />
            )}
        </div>
    )
}