import {return_neat_population} from './customValueReturn';

function display_countries(countriesArray){

    return new Promise((resolve)=>{
        const countriesContainer = document.getElementById('countries');
        countriesContainer.innerHTML = "";

        for(let i = 0; i < countriesArray.length; i++){

            /*---- Main country div---------*/
            const country = document.createElement('div');
            country.className = "country";

            /***-----------Flag div------------------ */
            const countryFlag = document.createElement('div');
            countryFlag.className = "country-flag";
            const flagImage = document.createElement('img');
            flagImage.className = "flag-image";
            flagImage.src = countriesArray[i].flag;
            countryFlag.appendChild(flagImage);


/*------------------------Country details div--------------------------------**/
            const countryDetails = document.createElement('div');
            countryDetails.className = "country-details";
            

            /*----------Country name div------------------------**/
            const countryName = document.createElement('p');
            countryName.className = "country-name";
            countryName.textContent = countriesArray[i].name;

            /*----------------Country population div-----------------***/
            const countryPopulation = document.createElement('p');
            countryPopulation.className = "country-population";


            countryPopulation.innerHTML = "Population:&nbsp";

            const populationValue = document.createElement('span');
            populationValue.className = "population-number";
            populationValue.innerHTML = return_neat_population(countriesArray[i].population);
            countryPopulation.appendChild(populationValue);


            /*--------------------Country region div-------------------**/
            const countryRegion = document.createElement('p');
            countryRegion.className = "country-region";

            // const regionText = document.createTextNode('Region:&nbsp');
            // countryRegion.appendChild(regionText);

            countryRegion.innerHTML = "Region:&nbsp";

            const regionValue = document.createElement('span');
            regionValue.className = "region-name";
            regionValue.innerHTML = countriesArray[i].region;
            countryRegion.appendChild(regionValue);

            /*-------------------Country sub-region div-------------------**/
            const countryCapital = document.createElement('p');
            countryCapital.className = "country-capital";
            
            // const capitalText = document.createTextNode('Capital:&nbsp');
            // countryCapital.appendChild(capitalText);

            countryCapital.innerHTML ="Capital:&nbsp";

            const capitalValue = document.createElement('span');
            capitalValue.className = "capital-name";
            capitalValue.innerHTML = countriesArray[i].capital;
            countryCapital.appendChild(capitalValue);

            country.appendChild(countryFlag);
            country.appendChild(countryDetails);
            countryDetails.appendChild(countryName);
            countryDetails.appendChild(countryPopulation);
            countryDetails.appendChild(countryRegion);
            countryDetails.appendChild(countryCapital);

            countriesContainer.append(country);
        }

        resolve(true);
    });
    
}


export default display_countries;