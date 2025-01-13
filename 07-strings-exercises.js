// 1. Concatena dos cadenas de texto
let myName = "José";
let myLastName = "Odé";
let myNewGreetings = "Hola, " + myName + " " + myLastName;
console.log(myNewGreetings);

// 2. Muestra la longitud de una cadena de texto
console.log(myNewGreetings.length);

// 3. Muestra el primer y último carácter de un string
console.log(myNewGreetings.slice(0, 14));

// 4. Convierte a mayúsculas y minúsculas un string
console.log(myNewGreetings.toUpperCase());
console.log(myNewGreetings.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let frase = `Habia una vez,
en un pueblo muy,
muy lejano`;

console.log(frase);

// 6. Interpola el valor de una variable en un string
let myNewGreetings2 = `Hola, ${myName} ${myLastName}`;
console.log(myNewGreetings2);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(myNewGreetings.replace(/ /g, "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(myNewGreetings.includes("Hol"));

// 9. Comprueba si dos strings son iguales
let string1 = "Hola mundo";
let string2 = "Hola, Mundo";
let sonIguales = string1 === string2; // Devuelve true si son iguales
console.log(sonIguales);

// 10. Comprueba si dos strings tienen la misma longitud
let mismaLongitud = string1.length === string2.length; // Compara la longitud de las cadenas
console.log(mismaLongitud);
