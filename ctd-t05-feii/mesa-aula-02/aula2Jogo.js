// função para validar o valor inserido no prompt
function validandoPrompt(){
    while(true){
        let promptJogador = prompt('Insira um valor de 1 a 3, sendo: \n 1 - para tesoura \n 2 - para papel  \n 3 - para pedra');
        if(isNaN(promptJogador) || promptJogador == 0 || promptJogador > 3){
        alert('Digite um valor válido');
        
        }else{
            return promptJogador;
        }
        
    }
}



/// função para conversão dos valores de numero para string
function valorConvertido(valor){
    let valorRecebido = '';
    if(valor == 1){
        valorRecebido = 'tesoura';
        return valorRecebido;
    }
    if(valor == 2){
        valorRecebido = 'papel';
        return valorRecebido;
    }
    if (valor == 3){
        valorRecebido = 'pedra';
        return valorRecebido;
    }
}

// tesoura = 1 
// papel = 2
// pedra = 3 

// função para as regras do jogo
function validandoResultado(j1, j2){
    if(j1 == 3 && j2 == 1 ){ //pedra tesoura 
        pontuacaoJogador += 1;
        alert(`Parabéns jogador, você fez 1 ponto \n você escolheu ${valorConvertido(3)}\n e o computador escolheu ${valorConvertido(1)} `);
    }
    if(j1 == 3 && j2 == 2){ // pedra papel
        pontuacaoComputador += 1;
        alert(`Que pena, o computador acaba de fazer 1 ponto \n você escolheu ${valorConvertido(3)}\n e o computador escolheu ${valorConvertido(2)} `);
    }
    if(j1 == 2 && j2 == 3){ // papel pedra
        pontuacaoJogador += 1;
        alert(`Parabéns jogador, você fez 1 ponto \n você escolheu ${valorConvertido(2)}\n e o computador escolheu ${valorConvertido(3)} `);
    }
    if(j1 == 2 && j2 == 1){ //papel  tesoura
        pontuacaoComputador += 1;
        alert(`Que pena, o computador acaba de fazer 1 ponto \n você escolheu ${valorConvertido(2)}\n e o computador escolheu ${valorConvertido(1)} `);
    }
    if(j1 == 1 && j2 == 3){ //tesoura  pedra
        pontuacaoComputador += 1;
        alert(`Que pena, o computador acaba de fazer 1 ponto \n você escolheu ${valorConvertido(1)}\n e o computador escolheu ${valorConvertido(3)} `);
    }
    if(j1 == 1 && j2 == 2){ // tesoura papel
        pontuacaoJogador += 1;
        alert(`Parabéns jogador, você fez 1 ponto \n você escolheu ${valorConvertido(1)}\n e o computador escolheu ${valorConvertido(2)} `);
    }
    if(j1 == j2 ){
        alert('Empate');
    }

    return (pontuacaoComputador, pontuacaoJogador);
}



//declaração da variavel com pontuação zerada
let pontuacaoJogador = 0;
let pontuacaoComputador = 0;



//loop para iniciar o jogo e ter um ganhador

while(pontuacaoComputador < 2 || pontuacaoJogador < 2){
    let jogador = 0;
    let computador = parseInt(Math.random()*3 + 1 );
    
    jogador = validandoPrompt();
    
    validandoResultado(jogador, computador);
    
    
    if(pontuacaoJogador == 2){
        alert(`Parabéns jogador você ganhou o jogo!!! \n \n o jogador está com ${pontuacaoJogador} pontos \n o computador está com ${pontuacaoComputador} ponto`);
        pontuacaoJogador = 0;
        pontuacaoComputador = 0;
    }
    if (pontuacaoComputador == 2 ){
        alert(`Não foi dessa vez, o computador ganhou o jogo!!! \n \n o jogador está com ${pontuacaoJogador} ponto \n o computador está com ${pontuacaoComputador} pontos`);
        pontuacaoJogador = 0;
        pontuacaoComputador = 0;
    }
    console.log("Teste");
    

}
