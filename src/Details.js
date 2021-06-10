import React from 'react';
import Loading from './Loading';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      loading: true,      
    };
}
  

 componentDidMount() {
  const { name } = this.props.match.params;
  console.log(name)
  const fetchCountry = () => {
    fetch(`https://restcountries.eu/rest/v2/name/${name.toLowerCase()}`).then(res => res.json().then(responseRequest => {
      this.setState({
        loading: false,
        countries: responseRequest,
      })
    }))
  };
  fetchCountry();
  
  // this.setState({
  //   loading: false,
  //   countries: responseRequest,
  // })
}

  render() {
    const {loading, countries} = this.state;
    console.log(countries) 
    if(loading) return <Loading />

    return (
      <div>
        <h1>Informações detalhadas</h1>
        <p>País: {countries[0].name}</p>
        <p>Capital: {countries[0].capital}</p>
        <p>Região: {countries[0].region}</p>
        <p>População: {countries[0].population} habitantes</p>
        <img src={countries[0].flag} alt={countries[0].name} />
      </div>      
    )
  }
}

export default Details;