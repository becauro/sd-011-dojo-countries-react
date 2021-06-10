import React, { Component } from 'react'
import Loading from './Loading';

export default class CountrieDetails extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchCountrie()
  }

  async fetchCountrie() {
    const { name } = this.props.match.params;
    console.log(name);
    const apiCountrie = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    const jsonCountrie = await apiCountrie.json();
    this.setState({
      countrie: jsonCountrie[0],
      loading:false,
    }, () => console.log(this.state))
  }

  render() {
    const { loading, countrie } = this.state
    return loading ? <Loading /> :(
      <div>
        <p>País: {countrie.name}</p>
        <p>Capital: {countrie.capital}</p>
        <p>População: {countrie.population}</p>
        <p>Região: {countrie.region}</p>
        <img src={countrie.flag} alt={countrie.name} />
      </div>
    )
  }
}
