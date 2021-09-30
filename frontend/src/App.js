import { useState } from 'react';
import { Switch, Route } from 'react-router';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Vaccination from './components/Vaccination';
import Strategie from './components/Strategie';
import Administration from './components/Administration';
import JeSuisSolidaire from './components/JeSuisSolidaire';

function App() {

  const [cityChoice, setCityChoice] = useState({});

  const handleCityChoice = (value) => {
    setCityChoice(value)
  };

  return (
    <div className="App relative">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home handleCityChoice={handleCityChoice}/>
        </Route>
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/vaccination">
          <Vaccination cityChoice={cityChoice}/>
        </Route>
        <Route exact path="/strategie-vaccinale" component={Strategie} />
        <Route exact path="/je-suis-solidaire" component={JeSuisSolidaire} />
        <Route path="/administration" component={Administration} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
