function validar() {
    let crearParrafo = document.createElement("p");
    let contenedor = document.getElementById("main-content");
    contenedor.appendChild(crearParrafo);
    let nodeToAddParrafo = document.createTextNode("Holis... como estas :)");
    crearParrafo.appendChild(nodeToAddParrafo);

}


function creartabla() {
    let createTable = document.createElement("table");
    let contenedor = document.getElementById("main-table");
    contenedor.appendChild(createTable);
// creamos el table row 
    let createRow = document.createElement("tr");
    createTable.appendChild(createRow);
// creamos los datos del table row
    let createDate = document.createElement("td");
    createRow.appendChild(createDate);
    let nodeToAddParrafo1 = document.createTextNode("Nombre: Yheison ");
    createDate.appendChild(nodeToAddParrafo1);
// table row
    let createRow1 = document.createElement("tr");
    createTable.appendChild(createRow1);

    let createDate1 = document.createElement("td");
    createRow1.appendChild(createDate1);
    let nodeToAddParrafo = document.createTextNode("Apellido: Lanza ");
    createDate1.appendChild(nodeToAddParrafo);
}