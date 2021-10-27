// Variável - idade, peso, altura, plano, imc

let nomeSobrenome = 'José da Silva';
let idade = 27;
let pesoKG = 83.5;
let altura = 1.70;
let plano = true
let imc = pesoKG / (altura*altura);

console.log(nomeSobrenome + ' Tem ' + idade + ' anos e seu índice de massa corporal é ' + imc.toFixed(2));
