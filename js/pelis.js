const LISTA_PELICULAS_URL = "https://raw.githubusercontent.com/rosacabrerac/The-Space-Zone/main/pelis.json";

let data = [];

var jsonfetch = function(url){
    var result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
};

function mostrarPeli(array) {
    let contenido = "";

    for (i = 0; i < array.length; i++) {
        let pelicula = array[i];

        contenido += `
        <article class="movies">
            <div id="containerPeli">
                <a href="${pelicula.link}" target="_blank">
                    <img src="${pelicula.img}"alt="${pelicula.titulo}">
                </a>
                <div id="nombrePeli">
                    <div id="estiloNombrePeli">
                        ${pelicula.titulo}
                    </div>
                </div>
            </div>       
        </article>
        `

        document.getElementById("pelis").innerHTML = contenido;
    }
};

document.addEventListener("DOMContentLoaded", function (e) {

    jsonfetch(LISTA_PELICULAS_URL).then(function(resultPeli){
        if (resultPeli.status === "ok")
        {
            data = resultPeli.data;

            mostrarPeli(data);
        }

    });


    // await fetch('https://raw.githubusercontent.com/rosacabrerac/The-Space-Zone/main/pelis.json')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.error(err));


    

});