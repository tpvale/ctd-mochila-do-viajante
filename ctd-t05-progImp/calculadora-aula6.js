// Nível I

function adicionar (num1, num2) {
  return num1 + num2;
}

function subtracao (num1, num2) {
  return num1 - num2;
}

function multiplicacao (num1, num2) {
  return num1 * num2;
}

function divisao (num1, num2) {
  return num1 / num2;
}

// Nível II

console.log("---Teste de Operações / Calculadora ---");

console.log(adicionar(2, 3), subtracao(5, 2));

console.log(multiplicacao(5, 2));

console.log(divisao(10, 2));

console.log(divisao(10, 0));

// Nível III

function quadradoDoNumero(num1) {
  return multiplicacao(num1, num1);
}
console.log(quadradoDoNumero(2));

function mediaDeTresNumero(num1, num2, num3) {
  let total = adicionar(num1, num2) + num3;
  return divisao(total, 3);
}
console.log(mediaDeTresNumero(52, 15, 25).toFixed(2));


function calculaPorcentagem(num1, num2) {
  let produto = (divisao(num2, 100));
  return multiplicacao(num1, produto);
}
console.log(calculaPorcentagem(300, 15));

function geradorDePorcentagem(num1, num2) {
  let porcentagem = (divisao(num1, num2)) * 100;
  return porcentagem;
}
console.log(geradorDePorcentagem(34, 100));