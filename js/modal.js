var modalAPOD = document.getElementById("modalAPOD");
var abrirModal = document.getElementById("abrirModal");
var cerrarModal = document.getElementById("cerrarModal");

abrirModal.onclick = function (){
    modalAPOD.style.display="block";
    
    document.getElementById("imagenmodal").src="${data.url}"
}


/* <img src="${data.url}" alt="" style="width:100%"> */

cerrarModal.onclick = function (){
    modalAPOD.style.display="none";
}

window.onclick = function(event){
    if (event.target == modalAPOD){
        modalAPOD.style.display = "none";
    }
}