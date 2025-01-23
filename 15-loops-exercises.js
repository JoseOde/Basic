// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 0; i <= 20; i++) {
  console.log(i);
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;

for (let i = 1; i <= 100; i++) {
  suma += i;
}

console.log(`La suma de los números del 1 al 100 es: ${suma}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["José", "María", "Carlos", "Ana", "Luis"];

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Hola, mundo";
let vocales = "aeiouAEIOU";
let contador = 0;

for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i])) {
    contador++;
  }
}

console.log(contador);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numbers = [1, 2, 3, 4, 5]; // Array de números
let producto = 1; // Inicializar el producto en 1 (neutro multiplicativo)

for (let i = 0; i < numbers.length; i++) {
  producto *= numbers[i]; // Multiplicar cada número por el producto acumulado
}

console.log(`El producto de todos los números es: ${producto}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 0; i <= 10; i++) {
  let resultado = i * 5;
  console.log(`5 x ${i} = ${resultado}`);
}

// 8. Usa un bucle para invertir una cadena de texto
let cadenatex = "hola, mundo";
let cadenaInvertida = "";

for (let i = cadenatex.length - 1; i >= 0; i--) {
  cadenaInvertida += cadenatex[i];
}

console.log(`La cadena invertida es: "${cadenaInvertida}"`);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibonacci = [0, 1]; // Inicializamos los dos primeros números de la secuencia

for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // Suma de los dos números anteriores
}
console.log(fibonacci);
console.log(
  `Los primeros 10 números de Fibonacci son: ${fibonacci.join(", ")}`
);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const numeros = [4, 15, 8, 23, 42, 7, 10, 11];

const mayoresADiez = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    mayoresADiez.push(numeros[i]);
  }
}

console.log(mayoresADiez);

// con while
const numerosW = [4, 15, 8, 23, 42, 7, 10, 11];

const mayoresADiezW = [];

let i = 0; // Inicializamos el índice

while (i < numeros.length) {
  if (numeros[i] > 10) {
    mayoresADiezW.push(numeros[i]);
  }
  i++; // Incrementamos el índice en cada iteración
}

console.log(mayoresADiezW); // Resultado: [15, 23, 42, 11]
