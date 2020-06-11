import {return_neat_population} from './customValueReturn';

async function display_single_country(country){
    return new Promise(async(resolve)=>{
        const cleaned_up = await clean_up();
        const singleCountry = Array.isArray(country) ? country[0] : country;

        if(cleaned_up){
            const name = document.getElementById('name');
            const flagImage = document.getElementById('flag-image');
            const nativeName = document.getElementById('native-name-value');
            const population = document.getElementById('population-value');
            const region = document.getElementById('region-value');
            const subRegion = document.getElementById('sub-region-value');
            const capital = document.getElementById('capital-value');
            const topLevelDomain = document.getElementById('top-level-domain-value');
            const currencies = document.getElementById('currencies-value');
            const languages = document.getElementById('languages-value');
            const borderCountries = document.getElementById('border-countries');


            name.innerHTML = singleCountry.name;
            flagImage.src = singleCountry.flag;
            nativeName.innerHTML = singleCountry.nativeName;
            population.innerHTML = return_neat_population(singleCountry.population);
            region.innerHTML = singleCountry.region;
            subRegion.innerHTML = singleCountry.subregion;
            capital.innerHTML = singleCountry.capital;
            topLevelDomain.innerHTML = singleCountry.topLevelDomain[0];

            for(let i = 0; i < singleCountry.currencies.length; i++){
                if(i > 0 && i < singleCountry.currencies.length){
                    currencies.innerHTML+= ", ";
                }
                currencies.innerHTML+= singleCountry.currencies[i].name;
            }

            for(let i = 0; i < singleCountry.languages.length; i++){
                if(i > 0 && i < singleCountry.languages.length){
                    languages.innerHTML+= ", ";
                }
                languages.innerHTML+= singleCountry.languages[i].name;
            }

            for(let i = 0; i < singleCountry.borders.length; i++){
                const borderCountry = document.createElement('button');
                borderCountry.className = "border-country";
                borderCountry.innerHTML = singleCountry.borders[i];
                borderCountries.appendChild(borderCountry);
            }
            
        }

        resolve(singleCountry.name);
    })
    
}


function clean_up(){
    return new Promise(resolve=>{
        const name = document.getElementById('name');
        const flagImage = document.getElementById('flag-image');
        const nativeName = document.getElementById('native-name-value');
        const population = document.getElementById('population-value');
        const region = document.getElementById('region-value');
        const subRegion = document.getElementById('sub-region-value');
        const capital = document.getElementById('capital-value');
        const topLevelDomain = document.getElementById('top-level-domain-value');
        const currencies = document.getElementById('currencies-value');
        const languages = document.getElementById('languages-value');
        const borderCountries = document.getElementById('border-countries');

        name.innerHTML = "";
        flagImage.src = "";
        nativeName.innerHTML = "";
        population.innerHTML = "";
        region.innerHTML = "";
        subRegion.innerHTML = "";
        capital.innerHTML = "";
        topLevelDomain.innerHTML = "";
        currencies.innerHTML = "";
        languages.innerHTML = "";
        borderCountries.innerHTML = "";

        resolve(true);
    });
}


export default display_single_country;