// 1. Crea un array que almacene cinco animales
let animalsArrays = ["perro", "gato", "tortuga", "caballo", "pez"];

console.log(animalsArrays);

// 2. Añade dos más. Uno al principio y otro al final
animalsArrays.unshift("vaca");

animalsArrays.push("oso");

console.log(animalsArrays);

// 3. Elimina el que se encuentra en tercera posición
animalsArrays.splice(2, 1);

console.log(animalsArrays);

// 4. Crea un set que almacene cinco libros
let bookSet = new Set([
  "Harry Potter",
  "Jurassic Park",
  "La Iliada",
  "Fundación",
  "Ubik",
]);

console.log(bookSet);

// 5. Añade dos más. Uno de ellos repetido
bookSet.add("En las montañas de la locura");
bookSet.add("Jurassic Park");

console.log(bookSet);

// 6. Elimina uno concreto a tu elección
bookSet.delete("Ubik");
console.log(bookSet);

// 7. Crea un mapa que asocie el número del mes a su nombre
let mesName = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
]);

console.log(mesName);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(mesName.has(5));
console.log(mesName.get(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano
mesName.set("verano", ["Junio", "Julio", "Agosto"]);

console.log(mesName);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myNewArray = [0, 1, 1, 2, 3, 5, 8, 13, 21];

console.log(myNewArray);

let set = new Set(myNewArray);

console.log(set);

let map = new Map();

map.set("almacenar", set);

console.log(map);
