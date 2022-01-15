import countryList from './assets/country.json';
import country from './lib/country';
// import states from './assets/state.json';
import Country from './lib/country';
import States from './lib/state';
// console.log(countryList)


// console.log(Country.getAllCountries);
console.log(country.getCountryByCode('IL'));
console.log(States.getStatesOfCountry('IL'));