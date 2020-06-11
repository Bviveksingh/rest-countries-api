function set_state(countryName){
    if(sessionStorage.getItem('country')){
        const countries = sessionStorage.getItem('country');
        let array = countries.split(',');
        array.push(countryName);
        sessionStorage.setItem('country',array);
    }
    else sessionStorage.setItem('country', countryName);
    
}

function get_state(){
    const previousStates = sessionStorage.getItem('country').split(',');
    return previousStates;
}

function delete_state(){
    const states = sessionStorage.getItem('country').split(',');
    states.pop();
    sessionStorage.setItem('country',states);
}

function clear_state(){
    sessionStorage.removeItem('country');
}

function set_state_mode(){
    const lightMode = "0";
    const darkMode = "1";
    if(window.sessionStorage.getItem('mode')){
        if(window.sessionStorage.getItem('mode') == lightMode){
            window.sessionStorage.setItem('mode',darkMode);
        } 
        else if(window.sessionStorage.getItem('mode') == darkMode){
            window.sessionStorage.setItem('mode',lightMode);
        } 
    }
    else{
        window.sessionStorage.setItem('mode',darkMode);
    }
    
        
}


function get_state_mode(){
    return sessionStorage.getItem('mode');
}

export {set_state,get_state,delete_state,clear_state,set_state_mode,get_state_mode};