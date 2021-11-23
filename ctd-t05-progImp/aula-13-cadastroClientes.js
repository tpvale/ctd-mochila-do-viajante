let conta = {
  numConta: 001,
  tipoConta: "poupança",
  salConta: 1500,
  titularConta: "Roger",
};


function Conta(numConta, tipoConta, salConta, titularConta) {
  this.numConta = numConta;
  this.tipoConta = tipoConta;
  this.salConta = salConta;
  this.titularConta = titularConta;
}

let conta2 = new Conta(001, "poupança", 2000, "Roberto");
let conta3 = new Conta(002, "corrente", 2000, "Tiago");
let conta4 = new Conta(003, "pix", 2000, "Larissa");
let lista = [];
lista.push(conta2, conta3, conta4);

console.log(lista);
