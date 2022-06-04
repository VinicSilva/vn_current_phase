const startProcess = performance.now();
const fs = require('fs');

function process() {
    let rawdata = fs.readFileSync('countries_load_test.json');
    let countries = JSON.parse(rawdata);
    let allLanguages = getAllLanguages(countries);
    countCountries(countries);
    countryWithMoreLanguagesAndSpeakDE(countries);
    countAllCountriesLanguages(allLanguages);
    countryWithMoreLanguages(countries);
    mostFrequentLanguage(allLanguages);
};

function countCountries(countries) {
    let countCountries = countries.length;
    console.log(`#1 - Number of countries in the world are: ${countCountries}.`);
}

function countryWithMoreLanguagesAndSpeakDE(countries) {
    let countriesThatSpeakDE = countries.filter(({languages}) => languages.some((language) => language === 'de'))
    let [{country}] = countriesOrdered(countriesThatSpeakDE);
    console.log(`#2 - The country with the highest number of official languages and speaks German is ${country}.`)
}

function countAllCountriesLanguages(allLanguages) {
    const distinctLanguages = getDistinctLanguages(allLanguages);
    console.log(`#3 - Number of official languages spoken are: ${distinctLanguages.length}.`);
}

function countryWithMoreLanguages(countries) {
    let [{country}] = countriesOrdered(countries);
    console.log(`#4 - The country with the highest number of official languages is ${country}.`)
}

function mostFrequentLanguage(languages) {
    let compare = 0;
    let mostFrequent = "";
    languages.reduce((acc, value) => {
        if(value in acc){
            acc[value]++;
        } else {
            acc[value] = 1;
        }
        if(acc[value] > compare) {
            compare = acc[value];
            mostFrequent = value;
        }
        return acc;
    }, {})
    console.log(`#5 - Most frequent language is: ${mostFrequent}.`);
}

function countriesOrdered(countries) {
    return countries.sort((a, b) => b.languages.length - a.languages.length);
}

function getAllLanguages(countries) {
    let allLanguages = [];
    for (let { languages } of countries) {
        allLanguages.push(...languages);
    }
    return allLanguages;
}

function getDistinctLanguages(languages) {
    return [...new Set(languages)];
}

process();
const endProcess = performance.now();
const totalProcess = endProcess - startProcess;
console.log(`Function takes ${totalProcess} milliseconds!`)