const validator = {

  isValid:(card)=>{
    const nCard = card.split("").reverse();
    let rescard = 0;

    for(let i = 0; i<nCard.length; i++){
      const num1Card = parseInt(nCard[i]);

      if (i % 2 !== 0 && num1Card >=5) {
        rescard = rescard + (num1Card * 2) -9;}

      else if (i % 2 !== 0 && num1Card < 5){
        rescard = rescard + (num1Card * 2);}

      else {
        rescard = rescard + num1Card;
      }
    }

    if (rescard % 10 === 0){
      return true;
    }
    else{
      return false;
    }
  },

  maskify: function(card1){
    const x = card1.split(''); 
    for (let i=0; i< x.length - 4; i++){
      x[i] = "#";
    }
    const maskedCard = x.join('');
    return maskedCard
  }
}

export default validator;



