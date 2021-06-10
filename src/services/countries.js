export const fetchCountries = () =>
  fetch('https://restcountries.eu/rest/v2/lang/pt').then(res => res.json());