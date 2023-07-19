document.addEventListener("DOMContentLoaded", function () {

const lab=document.getElementById("laboral");
const est=document.getElementById("estudios");
const cont=document.getElementById("contacto");

 cont.addEventListener("click", () => activayDesactiva("texto3"));
 est.addEventListener("click", () => activayDesactiva("texto2"));
 lab..addEventListener("click", () =>activayDesactiva("texto1"))

function activayDesactiva(elementId) {
   const elemento = document.getElementById(elementId);
    if (elemento.style.display === "none") {
      elemento.style.display = "block"; // Si está oculto, lo muestra
    } else {
      elemento.style.display = "none"; // Si está visible, lo oculta
    }
  }
});


