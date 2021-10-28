//descomentar 2 y 16 para transformar en carga automatica al cargar html
// document.addEventListener("DOMContentLoaded", async function (e) {

//foto del dia APOD
async function apiRequest() {
    let API_KEY = "RhghDJCmtGLYFa07eFBI2yXU13m7XC2W5BhgmpR3";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);

    if (response.status === 200) {
        console.log(response);
        let data = await response.json();
        console.log(data);

        fotoDia(data);
    }
};

function fotoDia(data) {
    document.getElementsByClassName("modal-content").innerHTML=`<img class="centerImage" id="imagenAPODhd" src="${data.url}">` 

    document.getElementById("cabecera").innerHTML = `
    
        <p id="APODtituloDeImagen">La imagen del dia de hoy es: </p>
        <img class="centerImage" id="imagenAPODhd" src="${data.url}">`;
};