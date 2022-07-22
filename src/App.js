import {MainScreen, InputCity} from './components/main-screen';
import {Helmet} from "react-helmet";



function App() {
  return (
    <>
    <Helmet>
            <meta charSet="utf-8" />
            <title>Krish's Weather App</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <meta name="description" content="Weather application" />

    </Helmet>
    
      <background className="Background"/>
    <div className="Container">
      <MainScreen/>
      <InputCity/>
    </div>
   
      
    </>
    
  );
}

export default App;
