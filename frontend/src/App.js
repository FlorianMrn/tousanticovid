import { useState } from 'react';
import { Switch, Route } from 'react-router';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Faq from './components/Faq';

function App() {

  const [cityChoice, setCityChoice] = useState("");

  const handleCityChoice = (value) => {
    console.log("hello", value)
    setCityChoice(value)
  };

  return (
    <div className="App relative">
      <Nav />
        <Route exact path="/">
          <Home handleCityChoice={handleCityChoice}/>
        </Route>
        <Route exact path="/faq" component={Faq} />
      <Footer />
    </div>
  );
}

export default App;
