const validator = {

   isValid:(card)=>{
    let nCard = card.split("").reverse();
    let rescard = 0;

    for(let i = 0; i<nCard.length; i++){
      let num1Card = parseInt(nCard[i]);

      if (i % 2 !== 0 && nCard >=5)
      rescard = rescard + (nCard * 2) -9;

      else if (i % 2 !== 0 && nCard < 5)
      rescard = rescard + (nCard * 2);

      else {
        rescard = rescard + nCard;
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
    return card1.replace( )
  }

}

export default validator;



