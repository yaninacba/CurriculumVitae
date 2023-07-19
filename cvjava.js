const lab=document.getElementById("laboral");
const est=document.getElementById("estudios");
const cont=document.getElementById("contacto");

 cont.addEventListener("click", () => toggleVisibility("texto3"));
 est.addEventListener("click", () => toggleVisibility("texto2"));
 lab..addEventListener("click", () => toggleVisibility("texto1"))

function activayDesactiva() {
   const elemento = document.getElementById(IdElemento);
    if (elemento.style.display === "none") {
      elemento.style.display = "block"; // Si está oculto, lo muestra
    } else {
      elemento.style.display = "none"; // Si está visible, lo oculta
    }
  }
});


