//set

//Declarción

let mySet = new Set();

console.log(mySet);

//Inicialización

mySet = new Set(["José", "Odé", "odesito", 33, true]);

console.log(mySet);

//Métodos comunes

//add y delete

mySet.add("jose.m.ode.p@gmail.com"); //añade elementos al final del set
console.log(mySet);

mySet.delete(true); // se tiene que pasar el elemento a eliminar

console.log(mySet);

//has

console.log(mySet.has("José"));
console.log(mySet.has(true));

//size

console.log(mySet.size);

//Convertir un set a un array

let myArray = Array.from(mySet);
console.log(myArray);

//Convertir un array a un set

mySet = new Set(myArray);
console.log(mySet);

//LOS SETS NO ADMITEN DUPLICADOS!!!
