import mexicanStates from "@/js/objects/mexicanStates.js";

// Espera a que el documento HTML se cargue completamente
document.addEventListener("DOMContentLoaded", function () {
  // Obtener elementos del DOM
  var stateSelect = document.getElementById("state");
  var municipalitySelect = document.getElementById("municipality");

  // Poblar el menú desplegable de estado
  mexicanStates.forEach(function (state) {
    var option = document.createElement("option");
    option.text = state.state; // Cambia estado a state
    stateSelect.add(option);
  });

  // Función para actualizar el menú desplegable de municipios según el estado seleccionado
  stateSelect.addEventListener("change", function () {
    var selectedState = stateSelect.value;
    var selectedStateObject = mexicanStates.find(function (state) {
      return state.state === selectedState; // Cambia estado a state
    });

    // Limpiar el menú desplegable de municipios
    municipalitySelect.innerHTML = "";

    // Poblar el menú desplegable de municipios
    selectedStateObject.municipality.forEach(function (municipality) {
      // Cambia municipios a municipality
      var option = document.createElement("option");
      option.text = municipality;
      municipalitySelect.add(option);
    });
  });

  // Al cargar la página, asegúrate de que los municipios correspondan al estado inicial seleccionado (si lo hay)
  var initialState = stateSelect.value;
  var initialStateObject = mexicanStates.find(function (state) {
    return state.state === initialState; // Cambia estado a state
  });

  // Poblar el menú desplegable de municipios con los municipios del estado inicial seleccionado
  initialStateObject.municipality.forEach(function (municipality) {
    // Cambia municipios a municipality
    var option = document.createElement("option");
    option.text = municipality;
    municipalitySelect.add(option);
  });
});
