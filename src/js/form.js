form.addEventListener("submit", (e) => {
  e.preventDefault();

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

  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        // Si la respuesta es exitosa, redirige a la página de agradecimiento
        window.location.href = "thanks";
      } else {
        console.error("Error en la solicitud:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Se produjo un error al enviar la solicitud:", error);
    });
});
