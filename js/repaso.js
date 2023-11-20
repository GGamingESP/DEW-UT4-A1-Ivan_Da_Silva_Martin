
// DOM

// Variables

// funciones y eventos
window.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem('cuestionario')){
        
    }else {
        fetch('/js/data.json').then(response => response.json()).then(response => "").catch(error => console.log(error));
    }
})