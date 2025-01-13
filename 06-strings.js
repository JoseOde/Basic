//Strings

//Concatencaión

let myName = "José";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

//Longitud
console.log(greeting.length);

//Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[10]);

//Métodos comunes
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("José"));
console.log(greeting.indexOf("Hola"));
console.log(greeting.indexOf("Odesito"));
console.log(greeting.includes("José"));
console.log(greeting.includes("Hola"));
console.log(greeting.includes("Odesito"));
console.log(greeting.slice(0, 9));
console.log(greeting.replace("José", "Miguel"));

//Template literals (plantillas literales)

let message = `Hola, este es mi
curso de Javascript`;

console.log(message);

console.log(`Hola, ${myName}!`);
