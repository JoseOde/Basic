// 1. Escribe un comentario en una línea
// Esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas
/* Esto es 
un comentario
en várias líneas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivo
// Declaración de variables con tipos primitivos
let number = 42; // Número
let text = "Hola, mundo"; // Cadena de texto (String)
let boolean = true; // Booleano
let Undefined; // Undefined
let nulo = null; // Null
let symbol = Symbol("id"); // Symbol
let myBigInt = BigInt(12345678901234567890); // BigInt

// 4. Imprime por consola el valor de todas las variables
console.log(number);
console.log(text);
console.log(boolean);
console.log(Undefined);
console.log(nulo);
console.log(symbol);
console.log(myBigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof number);
console.log(typeof text);
console.log(typeof boolean);
console.log(typeof Undefined);
console.log(typeof nulo);
console.log(typeof symbol);
console.log(typeof myBigInt);

// 6. A continiación, modifica los valores de las variables por otros del mismo tipo
number = 33;
text = "Hola, otra vez";
boolean = false;
Undefined;
nulo = null;
symbol = Symbol("otro id");
myBigInt = 1312312312312312312312453454n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
//number = dos;
text = 32;
boolean = "hola";
Undefined = 21;
nulo = "cero";
symbol = 12312312312;
myBigInt = "José";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const number2 = 42; // Número
const text2 = "Hola, mundo"; // Cadena de texto (String)
const boolean2 = true; // Booleano
const Undefined2 = undefined; // Undefined
const nulo2 = null; // Null
const symbol2 = Symbol("id"); // Symbol
const myBigInt2 = BigInt(12345678901234567890); // BigInt

// 9. A continuaación, modifica los valores de las constantes
//number2 = 32;
//text2 = "hola, otra vez";
//boolean2 = false;
//Undefined2 = undefined; // Undefined
//nulo2 = null; // Null
//symbol2 = Symbol("otro id"); // Symbol
//myBigInt2 = BigInt(12345678901234567890); // BigInt

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
console.log(number2);
console.log(text2);
console.log(boolean2);
console.log(Undefined2);
console.log(nulo2);
console.log(symbol2);
console.log(myBigInt2);
