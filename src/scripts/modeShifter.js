import styles from '../css/styles.scss';
import {get_state_mode} from './stateStorage';


function mode_shifter(){
    main_elements_mode_change();
    countries_list_mode_change();
    countries_list_country_mode_change();
    single_country_mode_change();
}

function main_elements_mode_change(){
    
    const mode = get_state_mode();
    const body = document.body;
    const mainElement = document.getElementById('main');
    const headerElement = document.getElementById('header');

    mainElement.style.color = (mode === "0") ? styles["lightMode-text"] : styles["darkMode-text"];
    body.style.backgroundColor = (mode === "0") ? styles["lightMode-background"] : styles["darkMode-background"]; 
    headerElement.style.backgroundColor = (mode === "0") ? styles["lightMode-elements"] : styles["darkMode-elements"];
    headerElement.style.boxShadow = (mode === "0") ? "0px 1px 1px 2px #f5f5f5" :"0px 0.1px 3px 2px #202020";
    headerElement.style.color = (mode === "0") ? styles['lightMode-text'] : styles["darkMode-text"];

}

function countries_list_mode_change(){
    const mode = get_state_mode();

    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const filterContainer = document.getElementById('filter-container');
    const filterOptions = document.getElementById('select-options');

    filterContainer.style.backgroundColor = (mode === "0") ? styles['lightMode-elements'] : styles['darkMode-elements'];
    filterContainer.style.boxShadow = (mode === "0") ? "2px 1px 5px 1px #f5f5f5" :`2px 1px 5px 1px ${styles['darkMode-elements']}`;
    filterOptions.style.backgroundColor = (mode === "0") ? styles['lightMode-elements'] : styles['darkMode-elements'];
    filterOptions.style.boxShadow =  (mode === "0") ? "2px 1px 5px 1px #f5f5f5":`2px 1px 5px 1px ${styles['darkMode-elements']}`;
    searchContainer.style.backgroundColor = (mode === "0") ? styles['lightMode-elements'] : styles['darkMode-elements'];
    searchContainer.style.boxShadow = (mode === "0")? "2px 1px 5px 1px #f5f5f5":`2px 1px 5px 1px ${styles['darkMode-elements']}`;
    searchInput.style.color = (mode === "0") ? styles["lightMode-text"] : styles["darkMode-text"];
    searchInput.style.backgroundColor = (mode === "0") ? styles['lightMode-elements'] : styles['darkMode-elements'];
}


function countries_list_country_mode_change(){
    const mode = get_state_mode();
    const countries = document.getElementsByClassName('country');
    let mainStyle;
    if(mode){
        if(mode === "0") mainStyle = styles['lightMode-elements'];
        else mainStyle = styles['darkMode-elements'];
    }
    else{
        mainStyle = styles['lightMode-elements'];
    }

    for(let i = 0; i < countries.length; i++){
        countries[i].style.backgroundColor = mainStyle;
        countries[i].style.boxShadow = `2px 2px 2px 0px ${mainStyle}`;
    }
}

function single_country_mode_change(){

    const mode = get_state_mode();
    const mainStyle = (mode && mode === "1") ? styles['darkMode-elements'] : styles['lightMode-elements'];
    const backButton = document.getElementById('back-button-container');
    backButton.style.boxShadow = (mode && mode === "1") ? "none" : "2px 2px 7px 4px #f5f5f5";
    backButton.style.backgroundColor = mainStyle;
    backButton.style.border = (mode && mode === "1") ? `0.5px solid ${styles['darkMode-elements']}` : "0.5px solid #f5f5f5";

    const borderCountries = document.getElementsByClassName('border-country');
    
    for(let i = 0; i < borderCountries.length; i++){
        borderCountries[i].style.boxShadow = `3px 3px 3px 2px ${mainStyle}`;
    }

}


export {mode_shifter,countries_list_country_mode_change,single_country_mode_change};