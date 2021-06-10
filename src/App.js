import React from "react";
import "./App.css";
import * as countries from "./services/countries";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
    this.allCountries = this.allCountries.bind(this);
  }
  componentDidMount() {
    this.allCountries();
  }

  async allCountries() {
    const apiCountries = await countries.fetchCountries();
    this.setState({ countries: apiCountries });

    console.log(apiCountries);
  }

  render() {
    const { countries } = this.state;
    return (
      <main>
        
       {countries.map((countrie)=> { 
       <div>
       <h1>{countrie.translations.br} </h1>
       <img src={countrie.flag} />
       </div>})
       }
      </main>
    );
  }
}

export default App;
