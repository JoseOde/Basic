// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "José";

if (myName == "José") {
  console.log("Tú nombre es José");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "José";
let password = 123456;
if (user == "José" && password == 123456) {
  console.log("Bienvenido a tu cuenta");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = -2;
if (number > 0) {
  console.log("El número es positivo");
} else if (number === 0) {
  console.log("El número es 0");
} else {
  console.log("El número es negativo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 15;
if (age >= 18) {
  console.log("Puedes votar");
} else {
  console.log("No puedes votar porque te faltan " + (18 - age) + " años");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let edad = 10;
const message = edad >= 18 ? "Adulto" : "Menor";
console.log(message);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "enero"; // Cambia este valor para probar diferentes casos
let estacion;

if (
  mes.toLowerCase() === "diciembre" ||
  mes.toLowerCase() === "enero" ||
  mes.toLowerCase() === "febrero"
) {
  estacion = "Invierno";
} else if (
  mes.toLowerCase() === "marzo" ||
  mes.toLowerCase() === "abril" ||
  mes.toLowerCase() === "mayo"
) {
  estacion = "Primavera";
} else if (
  mes.toLowerCase() === "junio" ||
  mes.toLowerCase() === "julio" ||
  mes.toLowerCase() === "agosto"
) {
  estacion = "Verano";
} else if (
  mes.toLowerCase() === "septiembre" ||
  mes.toLowerCase() === "octubre" ||
  mes.toLowerCase() === "noviembre"
) {
  estacion = "Otoño";
} else {
  estacion = "Mes no válido";
}

console.log(`Estamos en ${estacion}.`);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let diasxmes = 0;
if (diasxmes === 0) {
  console.log("Enero tiene 31 días");
} else if (diasxmes === 1) {
  console.log("Febrero tiene 28 días");
} else if (diasxmes === 2) {
  console.log("Marzo tiene 31 días");
} else if (diasxmes === 3) {
  console.log("Abril tiene 30 días");
} else if (diasxmes === 4) {
  console.log("Mayo tiene 31 días");
} else if (diasxmes === 5) {
  console.log("Junio tiene 30 días");
} else if (diasxmes === 6) {
  console.log("Julio tiene 31 días");
} else if (diasxmes === 7) {
  console.log("Agosto tiene 31 días");
} else if (diasxmes === 8) {
  console.log("Septiembre tiene 30 días");
} else if (diasxmes === 9) {
  console.log("Octubre tiene 31 días");
} else if (diasxmes === 10) {
  console.log("Noviembre tiene 30 días");
} else if (diasxmes === 11) {
  console.log("Diciembre tiene 31 días");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "italiano";
let saludo;

switch (idioma) {
  case "español":
    saludo = "Hola";
    break;
  case "ingles":
    saludo = "Hello";
    break;
  case "portugues":
    saludo = "oi cara";
    break;
  case "italiano":
    saludo = "alo";
    break;
  default:
    saludo = "Idioma incorrecto";
}

console.log(saludo);

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mesx = "enero"; // Cambia este valor para probar diferentes casos
let estacionx;

switch (
  mesx.toLowerCase() // Convierte el mes a minúsculas para evitar problemas con el formato
) {
  case "diciembre":
  case "enero":
  case "febrero":
    estacionx = "Invierno";
    break;
  case "marzo":
  case "abril":
  case "mayo":
    estacionx = "Primavera";
    break;
  case "junio":
  case "julio":
  case "agosto":
    estacionx = "Verano";
    break;
  case "septiembre":
  case "octubre":
  case "noviembre":
    estacionx = "Otoño";
    break;
  default:
    estacionx = "Mes no válido";
}

console.log(`Estamos en ${estacionx}.`);

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let mes1 = "enero"; // Cambia este valor para probar diferentes casos
let numerodias;

switch (mes1.toLowerCase()) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    numerodias = 31;
    break;
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    numerodias = 30;
    break;
  case "febrero":
    numerodias = 28;
    break;
  default:
    numerodias = "Mes no válido";
}

console.log(`Este mes tiene ${numerodias} días.`);
