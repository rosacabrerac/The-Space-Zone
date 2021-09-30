/* async function apiRequest() {
  let API_KEY = "RhghDJCmtGLYFa07eFBI2yXU13m7XC2W5BhgmpR3";
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  console.log(response);
  let data = await response.json();
  console.log(data);
  fotoDia(data);
}

function fotoDia(data) {
  document.getElementById(
    "fotoDia"
  ).innerHTML = `<img class="centerImage" style="max-width:100%;height:auto;" src="${data.url}">`;
}

/* Comienzo Botón Mostrar Foto 

function usarApiReq(data) {
  document.getElementById("APODimagen").innerHTML = `
    <p id="APODtituloDeImagen">La imagen del dia de hoy es: </p>
    <img class="centerImage" style="max-width:100%;height:auto;" src="${data.url}">`;
  document.getElementById("APODexplicacion").innerHTML += data.explanation;
}

function imagenPedida(data) {
  document.getElementById("APODimagen").innerHTML += `<img src="${data.url}">`;
}

/* Fin Botón Mostrar Foto 

window.addEventListener("DOMContentLoaded", (event) => {
  apiRequest();
});
*/