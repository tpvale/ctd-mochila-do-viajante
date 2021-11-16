// O que esses códigos retornam?

// 1- R: 5
// 2- R: Spiderman
// 3- R: 5


// Array Invertido
let frutas = ["Maçã", "Banana", "Uva", "Manga", "Laranja", "Kiwi", "Melão"];
frutas.reverse();
// console.log(frutas);

// Somar Array 

function somarArray(arr) {
  var soma = 0;
  for (var i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

console.log(somarArray([1,2,3]));