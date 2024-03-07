import districtSections from "@/js/objects/districts.js";
import mexicanStates from "@/js/objects/mexicanStates.js";

// Function to fill a dropdown
function fillDropdown(dropdown, data) {
  dropdown.innerHTML = ""; // Clean dropdown before adding new options
  data.forEach(function (item) {
    var option = document.createElement("option");
    option.text = item;
    option.value = item;
    dropdown.add(option);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var stateSelect = document.getElementById("state");
  var municipalitySelect = document.getElementById("municipality");
  var districtSelect = document.getElementById("district");
  var sectionSelect = document.getElementById("districtSection");

  // Fill state dropdown
  fillDropdown(
    stateSelect,
    mexicanStates.map((state) => state.state)
  );

  // Event when changing state
  stateSelect.addEventListener("change", function () {
    var selectedState = stateSelect.value;
    var selectedStateObject = mexicanStates.find(function (state) {
      return state.state == selectedState;
    });

    municipalitySelect.innerHTML = ""; // Clear previous options

    if (selectedStateObject && selectedStateObject.municipality) {
      fillDropdown(municipalitySelect, selectedStateObject.municipality);
    }
  });

  // Fill dropdown of districts
  fillDropdown(
    districtSelect,
    districtSections.map((district) => district.district)
  );

  // Event when changing district
  districtSelect.addEventListener("change", function () {
    var selectedDistrict = districtSelect.value;
    var selectedDistrictObject = districtSections.find(function (district) {
      return district.district == selectedDistrict;
    });

    sectionSelect.innerHTML = ""; // Clear previous options

    if (selectedDistrictObject && selectedDistrictObject.districtSection) {
      fillDropdown(sectionSelect, selectedDistrictObject.districtSection);
    }
  });
});
