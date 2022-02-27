function calc(e) {

  var operador = e.value // -, +, *, /
  // cria referência aos elementos html
  var num1 = document.getElementById("inNumero1").value;
  var num2 = document.getElementById("inNumero2").value;
  
                      // 1       +        2
  var resultado = eval(num1 + operador + num2)
 
  
  outResultado.textContent = resultado;
}
