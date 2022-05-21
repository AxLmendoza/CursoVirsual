
const uri = "https://raw.githubusercontent.com/AxLmendoza/ApiAxl/master/";
const URL = "https://raw.githubusercontent.com/AxLmendoza/ApiAxl/master/base_datos.json";
const contenedor = document.getElementById("Contenido_prin");

fetch(URL).then(function(respuesta) {
    return respuesta.json();
}).then(function(datos) {
    for(let i = 0; i < datos.lenght; i++) {
    contenedor.innerHTML += "<div class='IDA'><img src='" + uri + datos[i]["imagen"] + "'> <h3> "+ datos[i]["nombre"]+ "</h3></div";
    // contenedor.innerHTML += "<img src='" + uri + datos[i]["imagen"] + "'>";
    }
}).catch(function(error) {
     console.log(error);
});