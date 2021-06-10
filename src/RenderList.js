import React, { Component } from 'react';
import { fetchCountries } from './services/countries';

export default class RenderList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      countryList: [],
      loading: true,
    }
    this.setInitialState = this.setInitialState.bind(this)
    this.renderMapList = this.renderMapList.bind(this)
  }

  
  renderMapList(array) {
    return array.map(({ translations: { br }, flag }, index ) => {
      <div>
        <p>{ br }</p>
        <img src={ flag } /> 
      </div>
    });
  }

  setInitialState(response) {
    this.setState((state) => ({
      countryList: [...response, state.countryList],
      loading: false,
    }))
  }

  async componentDidMount() {
    const data = await fetchCountries();
    this.setInitialState(data);
  }

  render() {
    const {loading, countryList} = this.state;
    return (
      <div>
        { loading ? this.renderMapList(countryList) : <p>Loading...</p> }
      </div>
    )
  }
}
