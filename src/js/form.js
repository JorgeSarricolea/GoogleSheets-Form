import SHEETBEST_API from "@/js/api.js";
const url = SHEETBEST_API;

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create an object to store the form values
  const formData = {
    name: form.name.value,
    lastName: form.lastName.value,
    email: form.email.value,
    number: form.number.value,
    address: form.address.value,
    state: form.state.value,
    municipality: form.municipality.value,
    district: form.district.value,
    districtSection: form.districtSection.value,
    whatsapp: "https://wa.me/52" + form.number.value,
  };

  // Submit the form using a fetch request
  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData), // Send formData object as JSON
  })
    .then((response) => {
      // Handle response
      console.log("Respuesta recibida:", response);
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error("Se produjo un error al enviar la solicitud:", error);
    });
});
