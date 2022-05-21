
const API_URL = "https://raw.githubusercontent.com/AxLmendoza/ApiAxl/master/base_datos.json";
const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if (this.readyState == 4 && this.status == 200){
        const dat = JSON.parse(this.response);
        const HTMLResponse = document.querySelector(".IDA");

        const tpl = data.map(nombre == nombre);
        const tp = data.map(imagen == imagen);

        HTMLResponse.innerHTML = '<ul>${tpl}</ul>'
        HTMLResponse.innerHTML = '<ul>${tp}</ul>'
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open ("GET", '${API_URL}/users');
xhr.send();

