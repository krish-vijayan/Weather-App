import '../App.css';
import { useState, useEffect } from 'react';
import KeralaApi from './weather-api-call'; 


function MainScreen() {
    return (
        <>
            <div className="weather-app">
            <header className="Weather-app-header">
                <h1 className="Title-font">Weather App</h1>
                <img src="../images/clouds.png" className="Clouds" alt="cloud1" />
                <label className='Location-label'>Krish, whats the weather in</label>
            </header>
                <h3 className="Initials-font">By: Krish Vijayan</h3>
            
            </div>
        </>
    )
}

function Locations() {
    
    const keralaLocation = KeralaApi("location");
    const keralaCurrent = KeralaApi("current");
    const condition = KeralaApi();

    const [ value, setValue ] = useState(0);
    const [ display, setDisplay ] = useState(null);
    
    return (
        <>
         <div>
                <select id="options" className="Dropdown" onChange={(e) => {
                    const selectedValue = e.target.value;
                    setValue(selectedValue);
                    if (value == 'Kerala'){
                    setDisplay(<>
                    <h1 className="Location">{keralaLocation.region}, {keralaLocation.country}</h1>
                    <h1 className="Temperature">{keralaCurrent.temp_c}°C ({keralaCurrent.temp_f}°F)</h1> 
                    <h1 className="Condition">{condition.text}</h1></>)}

                    else{setDisplay(null)}
                    console.log(value);
                }} >
                    <option id="null"></option>
                    <option value="Kerala">Kerala</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="Toronto">Toronto</option> 
                </select>
                {display}
                
                
        </div>    
        </>
       
    );
}

function DisplayText() {
    return (<>
        
    </>)
}


export  {MainScreen, Locations};