<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

function activayDesactiva1() {
  document.getElementById("texto1").classList.toggle("show");
}
function activayDesactiva2() {
  document.getElementById("texto2").classList.toggle("show");
}
function activayDesactiva3() {
  document.getElementById("texto3").classList.toggle("show");
}

document.getElementById("laboral").onclick = function() {activayDesactiva1()};
document.getElementById("estudios").onclick = function() {activayDesactiva2()};
document.getElementById("contacto").onclick = function() {activayDesactiva3()};
