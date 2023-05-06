const baseUrl = "http://localhost:3000";

function submitForm() {
  const form = document.getElementById("CreateParkingLotForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    /**
     * Recuperando os valores dos inputs do form
     */
    const {
      name,
      age,
      phone,
      gender,
      CarModel,
      CarManufacturer,
      CarYear,
      CarPlate,
    } = form;

    /**
     * Faz a requisição POST para o backend de acordo com os campos capturados do form
     */
    await fetch(`${baseUrl}/park/new`, {
      method: "POST", 
      mode: "cors", 
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({
        client: {
          name: name.value,
          age: age.value,
          phone: phone.value,
          gender: gender.value,
          car: {
            model: CarModel.value,
            manufacturer: CarManufacturer.value,
            year: CarYear.value,
            plate: CarPlate.value,
          },
        },
      }),
    });

    alert("Registro Criado com sucesso!");
    location.replace(
      "http://localhost:5500/public/pages/ActiveParkingLotsPage/index.html"
    );
  });
}
submitForm();
