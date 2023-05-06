import getModalFinishedComponent from "./component/modalBody.js";
import getNotFoundMessage from "./component/notFoundMessage.js";
import getTableBody from "./component/tableBody.js";

const baseUrl = "http://localhost:3000";

class ParksFinishedTableData {
  async fetchData() {
    const dataResponse = await (await fetch(`${baseUrl}/parksFinished`)).json();
    if (!dataResponse || dataResponse.message == "Not Foundaaaaaaaa") {
      console.log("Not Found");
      return null;
    }
    return dataResponse.parking;
  }

  async render() {
    /**
     * Recuperando os registros do backend pelo fetch, a tabela html e o modal
     */
    const registers = await this.fetchData();
    const table = document.getElementById("MainTable");

    /**
     * Se o metodo fetchdata retornar nulo, ele exibe esse componente de erro
     */
    if (!registers) {
      table.innerHTML = getNotFoundMessage();
    }

    /**
     * renderiza a tela para cada registro salvo no banco
     */
    registers.forEach(async (park) => {
      table.innerHTML += getTableBody(park);
      await this.renderModal(park._id);
    });
  }
  async renderModal(id) {
    const modalBody = document.getElementById("DetailsModalBody");
    const parkingLot = await (
      await fetch(`${baseUrl}/parksFinished/${id}`)
    ).json();
    modalBody.innerHTML = getModalFinishedComponent(parkingLot);
  }
}
const renderParksFinishedTableData = new ParksFinishedTableData();
renderParksFinishedTableData.render();
