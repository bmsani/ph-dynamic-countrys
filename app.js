const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();
const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");
  countries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <h3>${country.name.common}</h3>
    <p>${country.capital}</p>
    <button onclick="loadCountryDetails('${country.name.common}')">Details</button>
    `;
    countriesDiv.appendChild(div);
  });
};

const loadCountryDetails = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryData(data[0]));
};


const displayCountryData = country =>{
  const detailsDiv = document.getElementById('country-details')
  detailsDiv.innerHTML = `
  <h5>Country Name: ${country.name.common}</h5>
  <h5>Population: ${country.population}</h5>
  <img src="${country.flags.png}" width="200">
  `
  console.log(country.flags);

}
