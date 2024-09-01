document.addEventListener("DOMContentLoaded", function () {

const lab=document.getElementById("laboral");
const est=document.getElementById("estudios");
const cont=document.getElementById("contacto");
 const proyect=document.getElementById("proyectos");

 proyect.addEventListener("click", () =>toggleVisibility("texto4"))
 cont.addEventListener("click", () => toggleVisibility("texto3"));
 est.addEventListener("click", () => toggleVisibility("texto2"));
 lab.addEventListener("click", () =>toggleVisibility("texto1"))

function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === "none") {
      element.style.display = "block"; // Si está oculto, lo muestra
    } else {
      element.style.display = "none"; // Si está visible, lo oculta
    }
  }
});







