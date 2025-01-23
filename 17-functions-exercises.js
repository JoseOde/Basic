// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b) {
  console.log(a + b);
}
sum(33, 20);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let myArray = [1, 32, 43, 12, 0];

function mayor(myArray) {
  let mayor = myArray[0];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > mayor) {
      mayor = myArray[i];
    }
  }
  return mayor;
}
console.log(mayor(myArray));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function numVoc(string) {
  const vocales = "aeiouáéíóú";
  let contador = 0;

  for (let i = 0; i < string.length; i++) {
    if (vocales.includes(string[i].toLowerCase())) {
      contador++;
    }
  }
  return contador;
}

const texto = "Hola, Cómo estas?";
console.log(numVoc(texto));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function mayus(array) {
  const resultadoMayus = [];

  for (let i = 0; i < array.length; i++) {
    resultadoMayus.push(array[i].toUpperCase());
  }

  return resultadoMayus;
}
const array = ["maria", "rocio", "juan"];
console.log(mayus(array));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(esPrimo(5));
console.log(esPrimo(10));
console.log(esPrimo(1));
console.log(esPrimo(2));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(array1, array2) {
  const comunes = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      comunes.push(array1[i]); // Agregamos el elemento al nuevo array si está en ambos
    }
  }

  return comunes;
}

// Ejemplo de uso
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

console.log(elementosComunes(array1, array2)); // Resultado: [4, 5]

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumarPares(array) {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      //si quisieramos impares if(array[i] % 2 !== 0)
      suma += array[i]; // Si el número es par, lo sumamos
    }
  }

  return suma;
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5, 6];
console.log(sumarPares(numeros)); // Resultado: 12

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarAlCuadrado(array) {
  const resultado = [];

  for (let i = 0; i < array.length; i++) {
    resultado.push(array[i] ** 2); // Elevamos al cuadrado y lo agregamos al nuevo array
  }

  return resultado;
}

// Ejemplo de uso
const otrosNumeros = [1, 2, 3, 4, 5];
console.log(elevarAlCuadrado(otrosNumeros)); // Resultado: [1, 4, 9, 16, 25]

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(cadena) {
  // Dividimos la cadena en un array de palabras
  const palabras = cadena.split(" ");
  // Invertimos el array de palabras
  const palabrasInvertidas = palabras.reverse();
  // Unimos las palabras invertidas en una nueva cadena
  return palabrasInvertidas.join(" ");
}

// Ejemplo de uso
const otroTexto = "Hola cómo estás, Dayana";
console.log(invertirPalabras(otroTexto)); // Resultado: "estás cómo Hola"

// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
  if (n < 0) {
    return "El factorial no está definido para números negativos.";
  }

  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i; // Multiplicamos el resultado acumulado por el número actual
  }

  return resultado;
}

// Ejemplo de uso
console.log(factorial(5)); // Resultado: 120
console.log(factorial(0)); // Resultado: 1
