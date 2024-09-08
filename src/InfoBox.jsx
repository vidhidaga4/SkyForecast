import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://github.com/gauravghai/weatherApp-Reactjs/blob/master/src/images/city.jpg?raw=true";
   // const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    //const RAIN_URL="../Images/rain.jpeg"
    const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="Infobox">
            <div className="cardContainer">
                <Card sx={{ 
                    maxWidth: 400,
                    backgroundColor: '#333', // Dark grey background for the card
                    color: 'white', // White text color for all content within the card
                    borderRadius: '10px', // Optional: Rounded corners for the card
                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)', // Soft shadow for depth
                    overflow: 'hidden',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    {!info.city && <> <CardMedia
                     component="img"
                     image="../Images/WeatherIcons.gif"
                     sx={{margin:'0 auto',
                        objectFit:'contain',
                        height:'60%',
                        width:"70%",
                        marginBottom:'5px',
                        marginTop:'0'

                     }}
                    />
                    <Typography>
                        Please enter a location to get weather information!
                    </Typography>
                    </>}
                {info.city && <><CardMedia
                   component="img"
                   sx={{ 
                    height: 150,
                    filter: 'brightness(0.85)'
                    }}
                   image={info.humidity > 80 ? RAIN_URL: info.temp > 16 ? HOT_URL : COLD_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                        {info.city} {info.humidity > 80 ? <ThunderstormIcon sx={{ color: '#abdbe3' }}/> : info.temp > 16 ?  <WbSunnyIcon sx={{ color: '#e28743' }}/> : <AcUnitIcon sx={{ color: 'white' }}/>}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'white' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp= {info.tempMin}&deg;C</p>
                        <p>Max Temp= {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                </>}
                </Card>
            </div>  
        </div>
    )
}