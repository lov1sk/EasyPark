export default function getTableBody(park) {
  const { _id, startTime, endTime } = park;
  const { name } = park.client;
  const { model, manufacturer, plate } = park.client.car;
  return `
    <tr id="${_id}"> 
        <td id="${_id}"> ${_id} </td> 
        <td> ${name} </td> 
        <td> ${model} </td>
        <td> ${plate} </td>  
        <td> ${manufacturer} </td> 
        <td> ${startTime} </td> 
        <td> <button type="button" id="detail-${_id}"class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">  Details </button></td>
    </tr>`;
}
