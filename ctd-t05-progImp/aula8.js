// vlaidação ESTRUTURA IF-ELSE
function validaSenha(senha) {
  let senhaCorreta = "batataBananaTomate";

  // se a senha estiver CORRETA
  // retorna = acesso permitido
  if (senha == senhaCorreta) {
    console.log("acesso permitido");
  } else {
    console.log("acesso negado");
  }
  // se a senha estiver INCORRETA
  // retonar - acesso negado
}

validaSenha("estruturaCondicional");
validaSenha("batataBananaTomate");

// ---

// Operador Ternário

function validaNovaSenha(senha) {
  let senhaCorreta = "thugstool"
  return senha == senhaCorreta ? console.log("acesso permitido") : console.log("negado");
}
validaNovaSenha("ifTernario");


function qualMes(valor) {
  switch (valor) {
    case '1':
      console.log("JANEIRO");
      break;
    case '2':
      console.log("FEVEREIRO");
      break;
    case '3':
      console.log("MARÇO");
      break;
    case '4':
      console.log("ABRIL");
      break;
    case '5':
      console.log("MAIO");
      break;
    case '6':
      console.log("JUNHO");
      break;
    case '7':
      console.log("JULHO");
      break;
    case '8':
      console.log("AGOSTO");
      break;
    case '9':
      console.log("SETEMBRO");
      break;
    case '10':
      console.log("OUTUBRO");
      break;
    case '11':
      console.log("NOVEMBRO");
      break;
    case '12':
      console.log("DEZEMBRO");
      break;
    default:
      console.log("Mês Invalido");
      break;
  }
}
qualMes('14');