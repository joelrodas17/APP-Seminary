// Obtener el enlace o elemento de archivo con ID específico
var archivo = document.getElementById("desgraduacion");

// Agregar un evento de clic al enlace
archivo.addEventListener("click", function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

  // Obtener la URL de la página que deseas abrir
  var url = "https://docs.google.com/spreadsheets/d/1HnogfYg20gTJKZoA_CnPBM7-X_ahIG7as-cbdD0XEIg/export?usp=sharing";

  // Abrir la página en una nueva pestaña o ventana
  window.open(url, "_blank");
});
