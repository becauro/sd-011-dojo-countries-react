import React from 'react';
import Countries from './services/countries';



const CountriesList = () => {

  async function fetchCountries() {
    const promise = await Countries()
    console.log(promise);
  }
  fetchCountries()
  return (
  <div>
    oi
  </div>
  );
};

export default CountriesList;
