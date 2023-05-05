import validator from './validator.js';

const btn = document.getElementById("botao"); //cria constante btn e pega o id botão do html
btn.addEventListener('click',start); //adiciona um ouvinte p o botão, o evento ocorre como clique e a função é chamada quando ocorre esse clique

function start(){ //função que sera executada ao botao ser clicado
  const numC = document.getElementById('numCard').value; //define uma constante numC que recebe o valor que foi digitado no input (id nunCard)
  const outside = document.getElementById ('out'); //define uma constante outside que recebe o elemento com o id out e esse elemento é onde o resultado será exibido

  const res = validator.isValid(numC); //a cons recebe o valor de retorno da função isValid e essa f recebe o n do cartão e retorna true se for válido ou false se não
  const cardBlock = validator.maskify(numC); //a const recebe o valor de retorno da função maskify e essa função recebe o n do cartão e retorna mascarado 
    
  if (numC === ""){ //bloco condicional que verifica se o campo esta vázio e se estiver vazio a msg será exibida no elemento outside
    outside.innerHTML = "Insira um valor";
  }

  else if(res === true){ //se o n do cartão for válido sera exibida essa msg juntamente com o n mascarado
    outside.innerHTML = cardBlock + "<h2 style='color: green;'> Cartão válido </h2>";
  }

  else{ //se o n do cartão n for valido sera exibida a msg juntamente com o n mascarado
    outside.innerHTML = cardBlock + "<h2 style= 'color: red;'> Cartão inválido </h2>";
  }

}

