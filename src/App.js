import React from 'react';
import CountriesList from './CountriesList';
import './App.css';
import Details from './Details';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (      
      <main>        
        <BrowserRouter>
        <Switch>
          <Route path="/details/:name" render={ (props) => <Details {...props} />} />
          <Route exact path="/" component={ CountriesList } />
        </Switch>          
        </BrowserRouter>
      </main>
    )
  }
}

export default App;
