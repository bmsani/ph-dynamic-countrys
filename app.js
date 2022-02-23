const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();
const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");
  countries.forEach((country) => {
    const div = document.createElement('div')
    div.classList.add('country')
    const countryName = document.createElement('h3')
    countryName.innerText = country.name.common
    div.appendChild(countryName)
    const p = document.createElement('p')
    p.innerText = country.capital
    div.appendChild(p)
    countriesDiv.appendChild(div)
  });
};
