import getModalComponent from "./component/modalBody.js";
import getNotFoundMessage from "./component/notFoundMessage.js";
import getTableBody from "./component/tableBody.js";

const baseUrl = "http://localhost:3000";

//popular tabela

class ParksActiveTableData {
  /**
   * Metodo para realizar a requisição GET e resgatar os registros do backend
   */
  async fetchData() {
    const dataResponse = await (await fetch(`${baseUrl}/parksActive`)).json();
    // Se não encontrar registros, retorna o valor null
    if (!dataResponse || dataResponse.message == "Not Foundaaaaaaaa") {
      console.log("Not Found any register saved on database");
      return null;
    }
    return dataResponse.registers;
  }

  async render() {
    const registers = await this.fetchData();
    const table = document.getElementById("MainTable");
    const tableBody = document.getElementById("TableData");

    if (!registers) {
      table.innerHTML = getNotFoundMessage();
    }
    registers.forEach(async (park) => {
      console.log(park);
      tableBody.innerHTML += getTableBody(park);
      await this.renderModal(park._id);
    });
  }

  /**
   * Metodo para renderizar informaçoes no modal, atraves da requisição GET
   */
  async renderModal(id) {
    const modalBody = document.getElementById("DetailsModalBody");
    const parkingLot = await (
      await fetch(`${baseUrl}/parksActive/${id}`)
    ).json();
    modalBody.innerHTML = getModalComponent(parkingLot);
  }

  /**
   * Metodo para finalizar um registro de estacionamento, atraves de uma
   * requisição PUT
   */
  finishParkingLot() {
    const modalFinishBtn = document.getElementById("FinishParkingLot");
    // Monitorando botao de finalizar
    modalFinishBtn.addEventListener("click", async (ev) => {
      const confirmation = confirm("Deseja realmente finalizar o registro?");
      // Se o usuario confirmar no prompt, executa o codigo abaixo
      if (confirmation) {
        const id = document.getElementById("RegisterId");
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "Updating the status of a parkinglot to finished",
          }),
        };

        await fetch(`${baseUrl}/park/finish/${id.textContent}`, requestOptions);
        document.location.reload(true);
      }
    });
  }
}

const pageActiveParkingLots = new ParksActiveTableData();
try {
  pageActiveParkingLots.render();
  pageActiveParkingLots.finishParkingLot();
} catch (error) {
  console.log(`${error.message}`);
}
