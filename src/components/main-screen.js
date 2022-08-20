import '../App.css';
import { useState } from 'react';
import { useOnKeyPress } from './onKeyPress';

function MainScreen() {
  return (
    <>
      <div className="weather-app">
        <header className="Weather-app-header">
          <h1 className="Title-font">Weather App</h1>
          <label className="Location-label">What's the weather in</label>
        </header>
        <h3 className="Initials-font">By: Krish Vijayan</h3>
      </div>
    </>
  );
}

function InputCity() {
  const [cityName, setCityName] = useState('');
  const [temp, setTemp] = useState('');
  const [degree, setDegree] = useState('');
  const [fahrenheit, setFarenheit] = useState('');
  const [condition, setCondition] = useState('');
  const [location, setLocation] = useState('');
  const [comma, setComma] = useState('');
  const [blankCity, setBlankCity] = useState('');
  const [validCity, setValidCity] = useState('');
  const [icon, setIcon] = useState(null);

  const getData = (val) => {
    setCityName(val.target.value);
  };

  const apiHandler = () => {
    if (!cityName) {
      setBlankCity('Please Enter a City Name!');
      setValidCity('');
      setTemp('');
      setDegree('');
      setFarenheit('');
      setCondition('');
      setIcon('');
      setLocation('');
      setComma('');
      return;
    } else {
      setBlankCity('');
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=a181a7a9bd3248d481e155948222906&q=${cityName}&aqi=no`
      )
        .then((res) => {
          if (res.status !== 200) {
            setTemp('');
            setDegree('');
            setFarenheit('');
            setCondition('');
            setIcon('');
            setLocation('');
            setComma('');
            setValidCity('Please Enter a Valid City Name!');
            throw new Error('Not 200 Response');
          } else {
            setValidCity('');
            return res.json();
          }
        })
        .then((data) => {
          setTemp(data.current);
          setDegree('°C');
          setFarenheit('°F');
          setCondition(data.current.condition);
          setLocation(data.location);
          setComma(',');
          setIcon('ConditionIcon');
          console.log('API WAS CALLED');
        })
        .catch((error) => console.log(`Hey, the error is ${error}`));
    }
  };
  useOnKeyPress(apiHandler, 'Enter');

  return (
    <>
      <input
        type="City"
        onChange={getData}
        placeholder="Enter City"
        className="Textbox"
      />

      <button className="InvisButton" onClick={apiHandler}>
        <img className="onHover Search" src="../images/search.png" alt="" />
      </button>
      <h1 className="Location">
        {location.name}
        {comma} {location.country}
      </h1>
      <h1 className="Temperature">
        {temp.temp_c}
        {degree}
      </h1>
      <h1 className="Temperature2">
        {' '}
        {temp.temp_f} {fahrenheit}
      </h1>
      <img className={icon} src={condition.icon} />
      <h1 className="ConditionText">{condition.text}</h1>
      <h1 className="TimeText">{location.localtime}</h1>
      <h1 className="Location">{blankCity}</h1>
      <h1 className="Location">{validCity}</h1>
    </>
  );
}

export { MainScreen, InputCity };
