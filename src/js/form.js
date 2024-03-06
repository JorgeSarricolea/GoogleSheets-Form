import SHEETBEST_API from "@/js/api.js";
const url = SHEETBEST_API;

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Crear un objeto para almacenar los valores del formulario
  const formData = {
    name: form.name.value,
    number: form.number.value,
    whatsapp: "https://wa.me/52" + form.number.value,
    state: form.state.value,
    municipality: form.municipality.value,
  };

  // Enviar el formulario mediante una solicitud fetch
  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData), // Enviar el objeto formData como JSON
  })
    .then((response) => {
      // Manejar la respuesta aquí
      console.log("Respuesta recibida:", response);
    })
    .catch((error) => {
      // Manejar cualquier error que ocurra durante la solicitud
      console.error("Se produjo un error al enviar la solicitud:", error);
    });
});
