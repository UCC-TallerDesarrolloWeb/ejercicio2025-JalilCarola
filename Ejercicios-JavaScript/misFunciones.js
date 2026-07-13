/**
 * Convierte una distancia entre metros, pulgadas, pies y yardas, y actualiza
 * los demas campos del formulario con el valor equivalente.
 * @method convertirUnidades
 * @param {string} unidad - id del campo que el usuario modifico (metro, pulgada, pie o yarda)
 * @param {string} valor - valor ingresado por el usuario en ese campo
 * @return {void} no retorna nada, actualiza el DOM directamente
 */
const convertirUnidades = (unidad, valor) => {
    valor = parseFloat(valor);
    if (isNaN(valor)) {
        return;
    }

    let metros;
    if (unidad === "metro") {
        metros = valor;
    } else if (unidad === "pulgada") {
        metros = valor / 39.3701;
    } else if (unidad === "pie") {
        metros = valor / 3.28084;
    } else if (unidad === "yarda") {
        metros = valor / 1.09361;
    }

    if (unidad !== "metro") document.getElementById("metro").value = metros.toFixed(2);
    if (unidad !== "pulgada") document.getElementById("pulgada").value = (metros * 39.3701).toFixed(2);
    if (unidad !== "pie") document.getElementById("pie").value = (metros * 3.28084).toFixed(2);
    if (unidad !== "yarda") document.getElementById("yarda").value = (metros * 1.09361).toFixed(2);
};

/**
 * Convierte un valor en grados a radianes usando la constante Math.PI, y
 * muestra el resultado en el campo "radianes".
 * @method gradosARadianes
 * @param {string} valor - valor en grados ingresado por el usuario
 * @return {void} no retorna nada, actualiza el DOM directamente
 */
const gradosARadianes = (valor) => {
    valor = parseFloat(valor);
    if (isNaN(valor)) {
        return;
    }
    const radianes = valor * (Math.PI / 180);
    document.getElementById("radianes").value = radianes.toFixed(4);
};
