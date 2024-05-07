document.getElementById("form").addEventListener("submit", function (event) {
  // Detiene el comportamiento predeterminado de envío del formulario
  event.preventDefault();

  // Asegura que "this" es un elemento HTMLFormElement
  const form = this;

  // Obtener el número de teléfono ingresado por el usuario
  const phoneNumberInput = document.getElementById("number");
  let phoneNumber = "";
  if (phoneNumberInput instanceof HTMLInputElement) {
    phoneNumber = phoneNumberInput.value;
  }

  // Concatenar el número con el prefijo de WhatsApp
  const whatsappLink = "https://wa.me/" + phoneNumber;

  // Asignar el valor al campo de entrada oculto
  const whatsappInput = document.getElementById("whatsapp");
  if (whatsappInput instanceof HTMLInputElement) {
    whatsappInput.value = whatsappLink;
  }

  // Realizar la solicitud POST al servidor
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
  })
    .then((response) => {
      // Redirigir a la página de agradecimiento después de completar el envío
      window.location.href = "/thanks";
    })
    .catch((error) => {
      console.error("Error:", error);
      // Puedes manejar errores aquí si es necesario
    });
});
