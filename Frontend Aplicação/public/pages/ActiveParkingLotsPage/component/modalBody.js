export default function getModalComponent(parkingLot) {
  const { totalTime, fee } = parkingLot;
  const { _id, startTime } = parkingLot.parking;
  const { name, age, phone } = parkingLot.parking.client;
  const { model, manufacturer, plate } = parkingLot.parking.client.car;
  const listBody = `<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto" >
      <div class="fw-bold" >Id Registro</div>
      <div id="RegisterId">${_id}</div>
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Nome Cliente</div>
      ${name}
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Idade Cliente</div>
      ${age}
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Telefone Cliente</div>
      ${phone}
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Carro</div>
      ${model}
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Montadora</div>
      ${manufacturer}
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Placa</div>
      ${plate}
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Hora de entrada</div>
      ${startTime}
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Total de tempo permanecido</div>
      ${totalTime}
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Preço sugerido</div>
      ${fee}
    </div>
  </li>
</ol>`;
  return listBody;
}
