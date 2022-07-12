import React, {useState, useEffect} from 'react';

function WeatherApi(city) {
    const [ weather, setWeather ] = useState([]);

    useEffect(() => {
        fetch (`http://api.weatherapi.com/v1/current.json?key=a181a7a9bd3248d481e155948222906&q=`+ city +`&aqi=no`)
        .then((res) => res.json())
        .then((data) => {
            setWeather(data.current);
            console.log("API WAS CALLED");
        });
    },[]);

   return weather;

    
}

export default WeatherApi;