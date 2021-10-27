// Your code here
class RestCountries {
    constructor() {
        this.url = "https://restcountries.eu/rest/v2/";
    }

    getAllCountries() {
        fetch(`${this.url}all`)
        .then((data)=> {
            return data.json()
        }).then((res) => {
            res.map(country => console.log(country.name));//Display all countries
        });
    }

    getCountryByName(countryName) {
        fetch(`${this.url}name/${countryName}`)
        .then((data)=> {
            return data.json()
        }).then((res) => {
            console.log(res); //Display by country name            
            res.forEach(element => {
                console.log("Bordering Countries", element.borders); //Display bordering countires
            });
        });
    }

    getAllCountriesByLanguage(language) {
        fetch(`${this.url}lang/${language}`)
        .then((data)=> {
            return data.json()
        }).then((res) => {
            res.map(country => console.log(country.name));//Display all countries
        });
    }

    getAllCountriesByPopulation(number) {
        fetch(`${this.url}all`)
        .then((data)=> {
            return data.json()
        }).then((res) => {
            console.log("Countries wth more population");
            res.map(country => {
                if (country.population > number) {
                    console.log(country.name) //Display all countries with population more than the number entered
                }
                
            });
        });
    }
}


let countries = new RestCountries();

countries.getAllCountries();//search all countries

countries.getCountryByName("finland");//search by country name

countries.getAllCountriesByLanguage("ur"); //Pass two character for language

countries.getAllCountriesByPopulation(50000000); // Entered number should be in millions, displays countries with more population then entered number