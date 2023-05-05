const validator = {

  isValid:(card)=>{ //define uma função chamada isValid que recebe um argumento card
    const nCard = card.split("").reverse(); //Essa linha define uma constante nCard que recebe o número do cartão como um array de caracteres, convertido pela função split com uma string vazia como argumento, para separar cada caractere em um elemento do array. Em seguida, o método reverse é usado para reverter a ordem dos elementos do array.
    let rescard = 0; //define uma variável rescard e inicializa com 0, que será usada para armazenar o resultado da soma dos dígitos do cartão.

    for(let i = 0; i<nCard.length; i++){ //começa um loop for que percorre cada elemento do array nCard.
      const num1Card = parseInt(nCard[i]); //define uma constante num1Card que recebe o valor numérico do caractere do cartão atualmente avaliado no loop transformando em inteiro.

      if (i % 2 !== 0 && num1Card >=5) { 
        rescard = rescard + (num1Card * 2) -9;} //Este if verifica se o índice atual i é ?par? e se o valor do dígito num1Card é maior ou igual a 5. Se essa condição for verdadeira, o valor de num1Card é multiplicado por 2 e subtraído por 9. O resultado é adicionado ao valor atual de rescard(q até o momento era 0)

      else if (i % 2 !== 0 && num1Card < 5){
        rescard = rescard + (num1Card * 2);} //Se o índice atual i for ?par? e o valor do dígito num1Card for menor que 5, o valor de num1Card é multiplicado por 2 e adicionado ao valor atual de rescard.

      else { //Se o índice atual i for impar, o valor do dígito num1Card é adicionado ao valor atual de rescard.
        rescard = rescard + num1Card;
      }
    }

    if (rescard % 10 === 0){
      return true;
    }
    else{
      return false;
    } //Após a conclusão do loop for, essa instrução condicional verifica se o valor de rescard é um múltiplo de 10. Se for, a função retorna true, indicando que o número do cartão é válido. Se não, a função retorna false.
  },

  maskify: function(card1){ //Esta é a definição da função maskify, que recebe um argumento card1. A função substitui os últimos quatro caracteres do número
    const x = card1.split(''); //converte a string card1 em uma matriz de caracteres separando-a com o método split. Essa matriz é armazenada na variável x.
    for (let i=0; i< x.length - 4; i++){ //Neste loop, percorre cada elemento da matriz x, exceto os últimos quatro caracteres.
      x[i] = "#"; //A cada iteração do loop, substitui o caractere atual em x por "#" 
    }
    const maskedCard = x.join(''); //Depois de substituir todos os caracteres desejados, uni todos os caracteres da matriz x em uma string novamente usando o método join. Essa string é armazenada na variável maskedCard.
    return maskedCard // retorna a string maskedCard, que contém a versão mascarada da string original passada como parâmetro.
  }
}

export default validator;



