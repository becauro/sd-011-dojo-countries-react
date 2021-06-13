import React, { useEffect, useState } from 'react';
import * as data from './services/countries';
import Pais from './País';
import Loading from './Loading';

export default function ListaPaís() {
  const [ countries, setCountries ] = useState([]);
  const [ isLoading, setLoading ] = useState(true);
  const [ input, setInput ] = useState('');
  
  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    setLoading(true);
    try {
    const response = await data.fetchCountries();
      setLoading(false);
      setCountries(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = ({ target: { value } }) => {
    setInput(value);
  }

  const filtredContry = (countries) => {
    if (input) {
      return countries.filter(({ translations, capital}) => (
        (translations.br.toLowerCase().includes(input.toLowerCase()))
        ||
        (capital.toLowerCase().includes(input.toLowerCase()))
      ));
    }
    return countries;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <form>
        <label>
            Digite um pais:
            <input
              style={{border: '3px solid black'}}
              onChange={handleChange}
              value={input}
              name="country"
              type="text"
            />
        </label>
      </form>
      <>
      {
        filtredContry(countries).map((country) => 
        <Pais
          key={country.name}
          country={country}
        />)
      }
      </>
    </  >
  )
}
