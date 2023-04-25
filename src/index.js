import validator from './validator.js';

const btn = document.getElementById("botao");
btn.addEventListener('click',start);

function start(){
  const numC = document.getElementById('numCard').value;
  const outside = document.getElementById ('out');

  const res = validator.isValid(numC);
  const cardBlock = validator.maskify(numC);
    
  if (numC === ""){
    outside.innerHTML = "Insira um valor";
  }

  else if(res === true){
    outside.innerHTML = cardBlock + "<h2 style='color: green;'> Cartão válido </h2>";
  }

  else{
    outside.innerHTML = cardBlock + "<h2 style= 'color: red;'> Cartão inválido </h2>";
  }

}