
function activayDesactiva1() {
  document.getElementById("texto1").style.display="block";
}
function activayDesactiva2() {
  document.getElementById("texto2").style.display="block";
}
function activayDesactiva3() {
  document.getElementById("texto3").style.display="block";
}

document.getElementById("laboral").onclick = function() {activayDesactiva1()};
document.getElementById("estudios").onclick = function() {activayDesactiva2()};
document.getElementById("contacto").onclick = function() {activayDesactiva3()};
