import validator from './validator.js';

let btn = document.getElementById("botao");
btn.addEventListener('click',start);

function start(){

    let numC = document.getElementById('numCard').value;
    let outside = document.getElementById ('out');

    let res = validator.isValid(numC);
    let cardBlock = validator.maskify(numC);
    
    if (numC === ""){
        outside.innerHTML = "Insira um valor";
    }

    else if(res == true){
        outside.innerHTML = cardBlock + "<h2 style='color: green;'> Cartão válido </h2>";
    }

    else{
        outside.innerHTML = cardBlock + "<h2 style= 'color: red;'> Cartão inválido </h2>";
    }

}