window.addEventListener('load', () => {


botones=w3.slideshow(".slideshow3", 12500);


anterior=document.getElementById("anterior").addEventListener('click', previo);
posterior = document.getElementById("siguiente").addEventListener('click', siguiente);


function previo() {
    botones.previous();
    //alert("hola");
}
function siguiente(params) {
    botones.next();
}


})