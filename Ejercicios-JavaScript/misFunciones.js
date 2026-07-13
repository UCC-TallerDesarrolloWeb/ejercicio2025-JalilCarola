/**
 * Convierte una distancia entre metros, pulgadas, pies y yardas, y actualiza
 * los demas campos del formulario con el valor equivalente.
 * @method convertirUnidades
 * @param {string} unidad - id del campo que el usuario modifico (metro, pulgada, pie o yarda)
 * @param {string} valor - valor ingresado por el usuario en ese campo
 * @return {void} no retorna nada, actualiza el DOM directamente
 */
const convertirUnidades = (unidad, valor) => {
    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
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

/**
 * Muestra u oculta el div "unDiv" segun el radio button seleccionado.
 * @method mostrarOcultarDiv
 * @param {string} valor - value del radio button seleccionado (val_mostrar o val_ocultar)
 * @return {void} no retorna nada, actualiza el DOM directamente
 */
const mostrarOcultarDiv = (valor) => {
    if (valor === "val_mostrar") {
        document.getElementById("unDiv").style.display = "block";
    } else if (valor === "val_ocultar") {
        document.getElementById("unDiv").style.display = "none";
    }
};

/**
 * Suma los valores de los campos nums1 y nums2 y muestra el resultado en totalS.
 * @method sumar
 * @return {void} no retorna nada, actualiza el DOM directamente
 */
const sumar = () => {
    const num1 = Number(document.getElementById("nums1").value);
    const num2 = Number(document.getElementById("nums2").value);
    document.getElementById("totalS").innerHTML = num1 + num2;
};

/**
 * Resta los valores de los campos numr1 y numr2 y muestra el resultado en totalR.
 * @method restar
 * @return {void} no retorna nada, actualiza el DOM directamente
 */
const restar = () => {
    const num1 = Number(document.getElementById("numr1").value);
    const num2 = Number(document.getElementById("numr2").value);
    document.getElementById("totalR").innerHTML = num1 - num2;
};

/**
 * Multiplica los valores de los campos numm1 y numm2 y muestra el resultado en totalM.
 * @method multiplicar
 * @return {void} no retorna nada, actualiza el DOM directamente
 */
const multiplicar = () => {
    const num1 = Number(document.getElementById("numm1").value);
    const num2 = Number(document.getElementById("numm2").value);
    document.getElementById("totalM").innerHTML = num1 * num2;
};

/**
 * Divide los valores de los campos numd1 y numd2 y muestra el resultado en totalD.
 * Si el divisor es 0, muestra un mensaje de error en vez del resultado.
 * @method dividir
 * @return {void} no retorna nada, actualiza el DOM directamente
 */
const dividir = () => {
    const num1 = Number(document.getElementById("numd1").value);
    const num2 = Number(document.getElementById("numd2").value);
    document.getElementById("totalD").innerHTML = num2 === 0 ? "Error: division por 0" : num1 / num2;
};

/**
 * Guarda en LocalStorage la distancia y unidad ingresadas en primerWeb.html,
 * y navega a segundaWeb.html para mostrarlas.
 * @method irASegundaWeb
 * @return {void} no retorna nada, guarda datos y cambia de pagina
 */
const irASegundaWeb = () => {
    const distancia = document.getElementById("distancia").value;
    const selectUnidades = document.getElementById("unidades");
    const unidadTexto = selectUnidades.options[selectUnidades.selectedIndex].text;

    localStorage.setItem("distancia", distancia);
    localStorage.setItem("unidad", unidadTexto);

    window.location.href = "segundaWeb.html";
};

/**
 * Lee de LocalStorage la distancia y unidad guardadas en primerWeb.html,
 * y las muestra en el campo "dist" de segundaWeb.html.
 * @method cargarDistancia
 * @return {void} no retorna nada, actualiza el DOM directamente
 */
const cargarDistancia = () => {
    const distancia = localStorage.getItem("distancia");
    const unidad = localStorage.getItem("unidad");
    document.getElementById("dist").value = `${distancia} ${unidad}`;
};
