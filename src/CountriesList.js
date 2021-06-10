import React from "react";
import {Link} from "react-router-dom"
import Loading from "./Loading";
import Countries from "./services/countries";

class CountriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      countriesObj: {},
      loading: true,
      arrayBackup: [],
    };
    this.filterCountries = this.filterCountries.bind(this);
  }

  async componentDidMount() {
    const newCountries = await Countries();
    console.log(newCountries);
    this.setState({
      countriesObj: newCountries,
      loading: false,
      filterCountries: newCountries,
    });
  }

  filterCountries({ target }) {
    const { value } = target;
    const { arrayBackup } = this.state;
    const filteredCountries = arrayBackup.filter((countrie) => countrie.translations.br.toUpperCase().includes(value.toUpperCase()));
    this.setState({
        countriesObj: filteredCountries,
    });
  }

  render() {
    const { countriesObj, loading } = this.state;
    if (loading === true) return <Loading />;

    return (
      <div>
          <h1>Lista de países</h1>
          <input type="test" onChange={this.filterCountries}></input>
        {countriesObj.map((listaPaises, index) => (
          <div key={ index }>
            <p>{listaPaises.translations.br}</p>
            <img src={listaPaises.flag} alt={listaPaises.translations.br} />
            <Link to={`/details/${listaPaises.name}`}>Mais Detalhes</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default CountriesList;
