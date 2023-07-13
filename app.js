var archivo = document.getElementById("desgraduacion");
archivo.addEventListener("click", function(event) {
  event.preventDefault(); 
  let url = "https://docs.google.com/spreadsheets/d/1HnogfYg20gTJKZoA_CnPBM7-X_ahIG7as-cbdD0XEIg/export?usp=sharing";
  window.open(url, "_blank");
});

var archivo2 = document.getElementById("inscripcion");
archivo2.addEventListener("click", function(event) {
  event.preventDefault();
  let url = "https://docs.google.com/spreadsheets/d/10lxVg-5KBFKlFdWgn18QSJOrFviT9PbTgZMD6DhYdKQ/edit?usp=sharing";
  window.open(url, "_blank");
});

