import '../App.css';
import { useState, useContext, createContext } from 'react';
import WeatherApi from './weather-api-call';



function MainScreen() {
    return (
        <>
            <background className="Background">
            <div className="weather-app">
            <header className="Weather-app-header">
                <h1 className="Title-font">Weather App</h1>
                <img src="../images/clouds.png" className="Clouds" alt="cloud1" />
                <label className='Location-label'>Krish, whats the weather in</label>
            </header>
                <h3 className="Initials-font">By: Krish Vijayan</h3>
            
            </div>
            </background>
        </>
    )
}


function InputCity() {
    const [ cityName, setCityName ] = useState('');
    const [ temp, setTemp ] = useState('');
    const [ degree, setDegree] = useState('');
    const [ condition, setCondition ] = useState('');
    const [ location, setLocation ]  = useState('');
    const [ comma, setComma ] = useState('');
    const [ blankCity, setBlankCity ] = useState('');
    const getData = (val) => {setCityName(val.target.value)};

  
    return ( 
        <>
                <input type="City" onChange={getData}
                placeholder="Enter City" className="Textbox"/>

                <button className="InvisButton" onClick={() => {
                    if (!cityName){ setBlankCity("Please Enter a City Name!"); return;}

                    else{
                    setBlankCity(null);
                    fetch (`http://api.weatherapi.com/v1/current.json?key=a181a7a9bd3248d481e155948222906&q=${cityName}&aqi=no`)
                    .then((res) => res.json())
                    .then((data) => {
                        setTemp(data.current);
                        setDegree("°C");
                        setCondition(data.current.condition);
                        setLocation(data.location);
                        setComma(",");
                        console.log("API WAS CALLED");
                    })
                    .catch(error => console.log(`Hey, the error is ${error}`));
                }}}>
                    <img className="onHover Search" src="../images/search.png"/>
                </button>  
                <h1 className="Location">{location.name}{comma} {location.country}</h1>
                <h1 className="Temperature">{temp.temp_c}{degree}</h1>
                <img className="ConditionIcon" src={condition.icon}/>
                <h1 className="ConditionText">{condition.text}</h1> 
                <h1 className="Location">{blankCity}</h1>
              
        </> 
    )
}







export  {MainScreen, InputCity};