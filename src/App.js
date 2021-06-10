import React from 'react';
import './App.css';
import * as countries from './services/countries';
 
class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      list: [],
    }
    this.getList = this.getList.bind(this);
  }

  componentDidMount(){
    this.getList();  
  }

  async getList(){
    const countriesList = await countries.fetchCountries();
    this.setState({
      list: countriesList,
    })
  }

  render() {
    const { list } = this.state;
    return (
      <main>
        <h1>Lista de países</h1>
        <ol>
          { list }
        </ol>
      </main>
    )
  }
}

export default App;
