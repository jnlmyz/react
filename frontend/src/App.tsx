import { useState } from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results"
import './App.css';

function App() {
    const [city, setCity] = useState<string>("");
    const getWeather = (e: any) => {
        e.preventDefault();
        fetch("http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no")
            .then(res => res.json())
            //dataが分からない
            .then(data => console.log(data))
    }

    return (
      <div className="test">
        <Title cityName={city}/>
        <Form setCity={setCity} getWeather={getWeather}/>
        <Results />
      </div>
    );
}

export default App;
