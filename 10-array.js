//array

//Declaración

let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

//Inicialización

myArray = [3];
myArray2 = new Array(3);

console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4);

console.log(myArray);
console.log(myArray2);

myArray = ["José", "Odé", "odesito", 33, true];
myArray2 = new Array("José", "Odé", "odesito", 33, true);

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3);
myArray2[0] = "José";
myArray2[1] = "Odé";
myArray2[2] = "odesito";

console.log(myArray2);

myArray = [];
myArray[2] = "José";
//myArray[0] = "Odé"
myArray[1] = "odesito";

console.log(myArray);

//Métodos comunes

myArray = [];

//push y pop

myArray.push("José");
myArray.push("Odé");
myArray.push("odesito");
myArray.push(33);

console.log(myArray);

myArray.pop(); // el pop elimina el último elemento del array y lo devuelve
console.log(myArray.pop());

console.log(myArray);

//shift y unshift
console.log(myArray.shift()); // el shift elimina el primer elemento del array y lo devuelve
console.log(myArray);

myArray.unshift("José", "odesito"); // el unshift agrega elementos al principio del array
console.log(myArray);

//lenght

console.log(myArray.length); // lenght nos da la longitud del array

//clear

myArray = []; // inicializar a cero

//slice

myArray.push("José", "Odé", "odesito", 33, true);

let myNewArray = myArray.slice(1, 2); //slice selecciona los elementos dentro del rango

console.log(myArray);
console.log(myNewArray);

//splice

myArray.splice(1, 3); // splice elimina los elementos seleccionados (desde(1) y cuantos(3)) y
// tambien puede agregar otro elemento añadiendo otro valor

console.log(myArray);
