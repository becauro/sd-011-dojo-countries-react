import React, { Component } from 'react'
import fetchCountries from './services/countries'
import Loading from './Loading';

export default class CountriesList extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,  
    }
  }

  async fetchC() {
    const list = await fetchCountries()
    console.log(list[0]);
    this.setState({
      countries: list,
      loading:false,
    })
  }

  componentDidMount() {
    this.fetchC();
  }

  render() {
    const { loading, countries } = this.state;
    return loading ? <Loading/> : (
      <div>
        {countries.map(({name, translations, flag})=> {
          // console.log(currencies);
        return <p key={ name }>{ translations.pt } <img className="img-flag" src={flag} alt={name} /></p>
        })}
      </div>
    )
  }
}
