

const mayor_edad = 18;
const tercera_edad = 75; 
const descuento_menor = 0.8;
const descuento_tercera = 0.5;

const el_edad  = document.getElementById("Edad");
const el_cantidad = document.getElementById("Cantidad");
const el_calcular = document.querySelector("div#Contenido_prin button");
const el_precio = document.querySelector("p span");

el_calcular.addEventListener("click", calcular);
el_edad.addEventListener("change", calcular);
el_cantidad.addEventListener("cange", calcular);
  
function calcular() {
    // XD
let precio = 1500;
let edad = el_edad.value;
let cantidad = el_cantidad.value;
 
//preguntar si vos sos mayor o de la tercera edad

if (edad < mayor_edad) {
    precio *= descuento_menor;
} else if (edad >= tercera_edad) {
    precio *= descuento_tercera;
}

// Aplica descuento a tercera edad 


//Mostrar el precio del boleto 
// console.log("El total es: " + precio * cantidad + " MXN"); 
el_precio.innerHTML = precio * cantidad;
}