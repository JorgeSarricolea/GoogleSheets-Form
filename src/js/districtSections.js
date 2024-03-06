// Asumiendo que tienes un objeto similar para distritos y secciones
import districtSections from "@/js/objects/districts.js";

document.addEventListener("DOMContentLoaded", function () {
  var districtSelect = document.getElementById("district");
  var sectionSelect = document.getElementById("section");

  // Poblar el menú desplegable de distrito
  districtSections.forEach(function (district) {
    var option = document.createElement("option");
    option.text = district.id; // Asumiendo que cada distrito tiene un nombre o identificador
    districtSelect.add(option);
  });

  districtSelect.addEventListener("change", function () {
    var selectedDistrict = districtSelect.value;
    var selectedDistrictObject = districtSections.find(function (district) {
      return district.id === selectedDistrict;
    });

    sectionSelect.innerHTML = ""; // Limpiar secciones anteriores

    selectedDistrictObject.sections.forEach(function (section) {
      var option = document.createElement("option");
      option.text = section;
      sectionSelect.add(option);
    });
  });

  // Puede ser necesario un código adicional para manejar la selección inicial o valores predeterminados
});
