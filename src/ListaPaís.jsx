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
  console.log(input);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <form>
        <label>
            Digite um pais:
            <input
              style={{border: '3px solid black'}}
              onChange={handleChange}
              name="country"
              type="text"
            />
        </label>
      </form>
      <div>
        {countries.map((country) => 
        <Pais
          key={country.name}
          country={country}
        />)}
      </div>
    </section>
  )
}
