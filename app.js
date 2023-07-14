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

var archivo4 = document.getElementById("maestrosclases");
archivo4.addEventListener("click", function(event) {
  event.preventDefault();
  let url = "https://docs.google.com/spreadsheets/d/12UbjmYBagY27_lEPaF-qV8gbcL0qtnjS2QfvETDf_J0/edit?usp=sharing";
  window.open(url, "_blank");
});
var archivo3 = document.getElementById("preguntas");
archivo3.addEventListener("click", function(event) {
  event.preventDefault();
  let url = "https://forms.gle/TBJiajxKjkhKnS1EA";
  window.open(url, "_blank");
});

window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('logoentrada');
  loadingScreen.style.display = 'none';
});

Swal.fire({
  title: 'App Seminary',
  text: 'Los datos obtenidos en este App, se actualizan todos los martes.',
  confirmButtonText: 'Aceptar',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})