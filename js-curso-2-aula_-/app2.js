//Altere o conteúdo da tag h1 com 
//document.querySelector e atribua o seguinte texto: Hora do Desafio.
let desafio = document.querySelector("h1");
desafio.innerHTML = ("Hora do desfio");

//Crie uma função que exiba no console a mensagem 
//O botão foi clicado
// sempre que o botão Console for pressionado.

function botãoConsole(){
    console.log("O botão foi clicado");
}

//Crie uma função que exiba um alerta com a mensagem:
// Eu amo JS, sempre que o botão Alerta for pressionado.

function botãoAlerta(){
    alert("Eu amo JS");
}

//Crie uma função que é executada quando o botão
// prompt é clicado, perguntando o nome de uma cidade 
//do Brasil. Em seguida, exiba um alerta com a mensagem 
//concatenando a resposta com o texto: 
//Estive em {cidade} e lembrei de você.

function botaoPrompt (){
   let cidade = prompt("Nome de uma cidade:");
   alert(`Estive em ${cidade} lembrei de você`); 
}
//Ao clicar no botão soma, peça 2 números inteiros e 
//exiba o resultado da soma em um alerta.

let numero1 = parseInt(prompt("Digite um número: "));
let numero2 = parseInt(prompt("Digite um número: "));
function botaoSoma(){
    let resultadoSoma = numero1 + numero2;
    alert(resultadoSoma);  
}
botaoSoma(numero1,numero2);