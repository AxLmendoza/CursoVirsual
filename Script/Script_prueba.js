

let precio = 1500;
const mayor_edad = 18;
const tercera_edad = 75;
const descuento_menor= 0.8;
const descuento_tercera= 0.5
const 
let edad = prompt("¿Cual es tu edad?");

//preguntar si vos sos mayor o de la tercera edad

if (edad < mayor_edad) {
 precio *= descuento_menor;
} else if (edad >= tercera_edad) {
    precio *= descuento_tercera;
}// Aplica descuento a tercera edad 


//Mostrar el precio del boleto 
console.log("Tu boleto cuesta: $" + precio + "MXN");