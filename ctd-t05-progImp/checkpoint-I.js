// Checkpoint Tiago Pereira do Vale - Turma 5

let prato = '';
let tempo = 0;


function microondas(prato, tempo) {
  switch (prato) {
    case 'Pipoca':
      if (tempo <= 9) {
        console.log("Tempo insuficiente.");
      } else if (tempo > 9 && tempo <= 19) {
        console.log("Prato pronto, bom apetite!!!");
      } else if (tempo > 19 && tempo <= 29) {
        console.log("O prato queimou.");
      } else {
        console.log("Kabum!");
      }
      break;
    case 'Macarrão':
      if (tempo <= 7) {
        console.log("Tempo insuficiente.");
      } else if (tempo > 7 && tempo <= 15) {
        console.log("Prato pronto, bom apetite!!!");
      } else if (tempo > 15 && tempo <= 23) {
        console.log("O prato queimou.");
      } else {
        console.log("Kabum!");
      }
      break;
    case 'Carne':
      if (tempo <= 14) {
        console.log("Tempo insuficiente.");
      } else if (tempo > 14 && tempo <= 29) {
        console.log("Prato pronto, bom apetite!!!");
      } else if (tempo > 29 && tempo <= 44) {
        console.log("O prato queimou.");
      } else {
        console.log("Kabum!");
      }
      break;
    case 'Feijão':
      if (tempo <= 11) {
        console.log("Tempo insuficiente.");
      } else if (tempo > 11 && tempo <= 23) {
        console.log("Prato pronto, bom apetite!!!");
      } else if (tempo > 23 && tempo <= 35) {
        console.log("O prato queimou.");
      } else {
        console.log("Kabum!");
      }
      break;
    case 'Brigadeiro':
      if (tempo <= 7) {
        console.log("Tempo insuficiente.");
      } else if (tempo > 7 && tempo <= 15) {
        console.log("Prato pronto, bom apetite!!!");
      } else if (tempo > 15 && tempo <= 23) {
        console.log("O prato queimou.");
      } else {
        console.log("Kabum!");
      }
      break;
      default:
        console.log("Prato Inexistente")
  }
}
microondas('Brigadeiro', 8);



