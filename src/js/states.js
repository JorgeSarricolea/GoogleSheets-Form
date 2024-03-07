import mexicanStates from "@/js/objects/mexicanStates.js";

document.addEventListener("DOMContentLoaded", function () {
  var stateSelect = document.getElementById("state");
  var municipalitySelect = document.getElementById("municipality");

  // Fill states dropdown
  mexicanStates.forEach(function (state) {
    var option = document.createElement("option");
    option.text = state.state;
    option.value = state.state;
    stateSelect.add(option);
  });

  // Event when changing state selection
  stateSelect.addEventListener("change", function () {
    var selectedState = stateSelect.value;
    var selectedStateObject = mexicanStates.find(function (state) {
      return state.state == selectedState;
    });

    municipalitySelect.innerHTML = ""; // Clear previous options

    if (selectedStateObject && selectedStateObject.municipality) {
      selectedStateObject.municipality.forEach(function (section) {
        var option = document.createElement("option");
        option.text = section; // Add municipalities as options
        municipalitySelect.add(option);
      });
    }
  });
});
