import { MainScreen, InputCity } from './components/main-screen';
import { Helmet } from 'react-helmet';
import clouds from './backgrounds/clouds.mp4';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Krish's Weather App</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Weather application" />
      </Helmet>

      <div>
        <video src={clouds} autoPlay loop muted className="Background" />
      </div>
      {/* <div className="Background"/> */}
      <div className="Container">
        <MainScreen />
        <InputCity />
      </div>
    </>
  );
}

export default App;
