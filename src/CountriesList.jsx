import React, { Component } from 'react'
import fetchCountries from './services/countries'
import Loading from './Loading';

export default class CountriesList extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
    }
    this.filterCountrie = this.filterCountrie.bind(this);
  }

  async fetchC() {
    const list = await fetchCountries()
    // console.log(list[0]);
    this.setState({
      countries: list,
      backup: list,
      loading:false,
    })
  }


  filterCountrie({target : {value}}) {
    console.log(value);
    const { backup } = this.state;
    const filteredList = backup.filter(({ translations }) => translations.pt.toUpperCase().includes(value.toUpperCase()));
    this.setState({
      countries: filteredList,
    })
  }

  componentDidMount() {
    this.fetchC();
  }

  render() {
    const { loading, countries } = this.state;
    return loading ? <Loading/> : (
      <div>
        Filtrar países <input type="text" onChange={this.filterCountrie}></input>
        {countries.map(({name, translations, flag})=> {
          // console.log(currencies);
        return <p key={ name }>{ translations.pt } <img className="img-flag" src={flag} alt={name} /></p>
        })}
      </div>
    )
  }
}
