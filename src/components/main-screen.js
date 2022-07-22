import '../App.css';
import { useState} from 'react';

function MainScreen() {
    return (
        <>
           
            <div className="weather-app">
            <header className="Weather-app-header">
                <h1 className="Title-font">Weather App</h1>
                <label className='Location-label'>Krish, whats the weather in</label>
            </header>
                <h3 className="Initials-font">By: Krish Vijayan</h3>
            
            </div>
        
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
    const [ validCity, setValidCity ] = useState('');
    const getData = (val) => {setCityName(val.target.value)};

  
    return ( 
        <>
                <input type="City" onChange={getData}
                placeholder="Enter City" className="Textbox"/>

                <button className="InvisButton" onClick={() => {
                    if (!cityName){ 
                        setBlankCity("Please Enter a City Name!");
                        setValidCity('');
                        setTemp('');
                        setDegree('');
                        setCondition('');
                        setLocation('');
                        setComma(''); 
                        return;}
                    else{
                    setBlankCity('');
                    fetch (`https://api.weatherapi.com/v1/current.json?key=a181a7a9bd3248d481e155948222906&q=${cityName}&aqi=no`)
                    .then((res) =>{
                        if (res.status !== 200) {
                            setTemp('');
                            setDegree('');
                            setCondition('');
                            setLocation('');
                            setComma('');
                            setValidCity("Please Enter a Valid City Name!")
                            throw new Error("Not 200 Response")}
                        else {
                            setValidCity('');
                            return res.json()}
                    })
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
                    <img className="onHover Search" src="../images/search.png" alt=""/>
                </button>  
                <h1 className="Location">{location.name}{comma} {location.country}</h1>
                <h1 className="Temperature">{temp.temp_c}{degree}</h1>
                <img className="ConditionIcon" src={condition.icon} />
                <h1 className="ConditionText">{condition.text}</h1> 
                <h1 className="Location">{blankCity}</h1>
                <h1 className="Location">{validCity}</h1>
              
        </> 
    )
}







export  {MainScreen, InputCity};