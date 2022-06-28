import './App.css';
import searchLocations from './components/searchLocations';

function App() {
  return (
    <div className="weather-app">
      <header className="Weather-app-header">
      <h1 className="Title-font">Weather App</h1>
      <img src="../images/clouds.png" className="Clouds" alt="cloud1" />
      <label className='Location-label'>Krish, whats the weather in </label>

      <select className='Location-dropdown' id="location-dropdown">
                <option value="toronto" className='onHover' >Toronto</option>
                <option value="new-jersey">New Jersey</option>
                <option value="mumbai">Mumbai</option>
            </select>
      </header>
      <h3 className="Initials-font">By: Krish Vijayan</h3>
     
    </div>
  );
}

export default App;
