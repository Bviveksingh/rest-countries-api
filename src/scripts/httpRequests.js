async function get_all_countries(){
    return fetch('https://restcountries.eu/rest/v2/all').then(response=> response.json())
}

async function get_filtered_countries(regionName){
    return fetch(`https://restcountries.eu/rest/v2/region/${regionName}`).then(response => response.json());
} 

async function get_searched_countries(name){
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(response => response.json());
}

async function get_single_country(fullName){
    return fetch(`https://restcountries.eu/rest/v2/name/${fullName}?fullText=true`).then(response => response.json());
}

async function get_single_country_border(alphaCode){
    return fetch(`https://restcountries.eu/rest/v2/alpha/${alphaCode}`).then(response => response.json());
}


export {get_all_countries,get_filtered_countries,get_searched_countries,get_single_country,get_single_country_border};