import { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {

  const [cityChoice, setCityChoice] = useState("");

  const handleCityChoice = (value) => {
    console.log("hello", value)
    setCityChoice(value)
  };

  return (
    <div className="App relative">
      <Nav />
      <Home handleCityChoice={handleCityChoice}/>
    </div>
  );
}

export default App;
