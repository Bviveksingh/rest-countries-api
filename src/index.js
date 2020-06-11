import './css/styles.scss';
import {get_all_countries,
        get_filtered_countries,
        get_searched_countries,
        get_single_country,
        get_single_country_border} from './scripts/httpRequests';
import display_countries from './scripts/countriesLoader';
import display_single_country from './scripts/countryLoader';
import {set_state,get_state,delete_state,clear_state,set_state_mode,initial_set_mode} from './scripts/stateStorage';
import {mode_shifter,
        single_country_mode_change,
        countries_list_country_mode_change} from './scripts/modeShifter';

window.onload = e =>{
    setup_mode_shifter();
    setup_filter();
    setup_search();
    setup_home_button();
    initial_countries_load();
}

async function initial_countries_load(){
    toggle_element('loader');
    clear_state();
    const countries = await get_all_countries();
    if(countries){
        toggle_element('loader');
        const countriesDisplayed = await display_countries(countries);
        if(countriesDisplayed){
            countries_list_country_mode_change();
            setup_countries();
        }
    }
}

async function filter_countries_load(e){
    toggle_element('loader');
    const region = e.target.innerText.toLowerCase();
    const filteredCountries = await get_filtered_countries(region);
    if(filteredCountries){
        toggle_element('loader');
        const countriesDisplayed = await display_countries(filteredCountries);
        if(countriesDisplayed){
            countries_list_country_mode_change();
            setup_countries();
        }
    }
}

async function search_countries_load(e){
    if(e.target.value < 1) return;
    toggle_element('loader');
    const searchValue = e.target.value.toLowerCase();
    const searchedCountries = await get_searched_countries(searchValue);
    if(searchedCountries){
        toggle_element('loader');
        const countriesDisplayed = await display_countries(searchedCountries);
        if(countriesDisplayed){
            countries_list_country_mode_change();
            setup_countries();
        }
    }
}


async function single_country_load(e){
    toggle_element("loader");
    let country; 
    e.target.parentElement.id === "border-countries" ? country = await op_before_border_country_load(e.target):
    country = await op_before_single_country_load(e.target); 

    if(country){
        toggle_element("loader");
        const singleCountryName = await display_single_country(country);
        if(singleCountryName){
            single_country_mode_change();
            setup_single_country();
            set_state(singleCountryName.toLowerCase());
        }
        
    }
}

function op_before_single_country_load(eventTarget){
    return new Promise(async(resolve) =>{
        toggle_element("countries-list","flex");
        const mainCountryElement = eventTarget.parentElement.parentElement;
        const countryNameValue = (mainCountryElement.querySelector('.country-name').innerHTML).toLowerCase();

        const country =  await get_single_country(countryNameValue);
        toggle_element("single-country-detail","flex");

        resolve(country);
    })
}

function op_before_border_country_load(eventTarget){
   return new Promise(async(resolve)=>{
        const alphaCode = eventTarget.innerHTML.toLowerCase();
        const country = await get_single_country_border(alphaCode); 
        resolve(country);
   })
}


async function back_button_country_load(){
    const previousStates = get_state();
    const lastButOneState = previousStates[previousStates.length - 2];
    if(!lastButOneState){
        toggle_element('single-country-detail',"flex");
        toggle_element("countries-list","flex");
        initial_countries_load();
    }
    else{
        delete_state();
        const singleCountry = await get_single_country(lastButOneState);
        if(singleCountry){
            const singleCountryDisplayed = await display_single_country(singleCountry);
            if(singleCountryDisplayed){
                single_country_mode_change();
                setup_single_country();
            }
        }  
    }
}




function setup_single_country(){
    const borderCountriesContainer = document.getElementById('border-countries');
    const backButton = document.getElementById('back-button-container');
    for(let i = 0; i < borderCountriesContainer.children.length; i++){
        borderCountriesContainer.children[i].addEventListener("click", single_country_load);
    }

    backButton.addEventListener("click",back_button_country_load);
}

function setup_countries(){
    const flag = document.getElementsByClassName('flag-image');
    const countryName = document.getElementsByClassName('country-name');
    for(let i = 0; i < flag.length; i++){
        flag[i].addEventListener("click", single_country_load);
        countryName[i].addEventListener("click",single_country_load);
    }
}

function setup_search(){
    const searchElement = document.getElementById('search-input');
    searchElement.addEventListener('change', search_countries_load);
}


function setup_filter(){
    const selectElement = document.getElementById('select-element');
    selectElement.addEventListener("click",()=>{
        toggle_element('select-options','flex');
    });

    const selectOptions = document.getElementsByClassName('select-option');
    for(let i = 0; i < selectOptions.length; i++){
        selectOptions[i].addEventListener("click", filter_countries_load);
        selectOptions[i].addEventListener("click",()=>{
            toggle_element('select-options',"flex");
        });
    }
}


function setup_mode_shifter(){
    const modeButton = document.getElementById('header-mode');
    modeButton.addEventListener("click",setup_mode_state);
}


function setup_mode_state(){
    set_state_mode();
    mode_shifter();
}

function setup_home_button(){
    const homeButton = document.getElementById('header-main');
    homeButton.addEventListener('click', ()=>{
        const countriesList = document.getElementById('countries-list');
        const displayProp = window.getComputedStyle(countriesList,null).getPropertyValue("display");
        if(displayProp === "none"){
            toggle_element('single-country-detail',flex);
            toggle_element('countries-list',"flex");
        }
        initial_countries_load();
    });
}


function toggle_element(id,elementDisplayProp="block"){
    const element = document.getElementById(`${id}`);
    const displayProp = window.getComputedStyle(element,null).getPropertyValue("display");

    if(displayProp === elementDisplayProp) element.style.display = "none";
    else element.style.display = elementDisplayProp;
}