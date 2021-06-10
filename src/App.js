import React from 'react';
import './App.css';
import CountriesList from './CountriesList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountrieDetails from './CountrieDetails';

const App = () => {
  return (
    <main>
      <Router>
        <Switch>
        <Route path="/details/:name" render={(props) => <CountrieDetails {...props}/>}/>
        <Route path="/" component={CountriesList} />
        </Switch>
      </Router>
      {/* <CountriesList /> */}
    </main>
  );
};

export default App;
