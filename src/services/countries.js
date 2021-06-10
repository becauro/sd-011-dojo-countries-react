export const fetchCountries = () =>
  fetch('https://restcountries.eu/rest/v2/all/lang/pt').then(res => res.json());