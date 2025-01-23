// 1. Crea un objeto con 3 propiedades
let book = {
  name: "Jurassic Park",
  autor: "Michael Chripton",
  age: 1880,
};

// 2. Accede y muestra su valor
console.log(book);

// 3. Agrega una nueva propiedad
book.editor = "magic";

console.log(book);

// 4. Elimina una de las 3 primeras propiedades
delete book.editor;

console.log(book);

// 5. Agrega una función e invócala
book.read = function () {
  console.log("Sirve para leer");
};

console.log(book.read());

// 6. Itera las propiedades del objeto
for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}
// 7. Crea un objeto anidado
book.secuela = {
  name: "Lost World",
  age: "1991",
};

console.log(book);

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(book.secuela.name);
console.log(book.secuela.age);

// 9. Comprueba si los dos objetos creados son iguales
console.log(book == book.secuela);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(book.secuela.name == book.secuela.age);
