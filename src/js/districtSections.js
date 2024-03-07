import districtSections from "@/js/objects/districts.js";

document.addEventListener("DOMContentLoaded", function () {
  var districtSelect = document.getElementById("district");
  var sectionSelect = document.getElementById("districtSection");

  // Fill districts dropdown
  districtSections.forEach(function (district) {
    var option = document.createElement("option");
    option.text = district.district;
    option.value = district.district;
    districtSelect.add(option);
  });

  // Event when changing district selection
  districtSelect.addEventListener("change", function () {
    var selectedDistrict = districtSelect.value;
    var selectedDistrictObject = districtSections.find(function (district) {
      return district.district == selectedDistrict;
    });

    sectionSelect.innerHTML = ""; // Clear previous options

    if (selectedDistrictObject && selectedDistrictObject.districtSection) {
      selectedDistrictObject.districtSection.forEach(function (section) {
        var option = document.createElement("option");
        option.text = section; // Add municipalities as options
        sectionSelect.add(option);
      });
    }
  });
});
