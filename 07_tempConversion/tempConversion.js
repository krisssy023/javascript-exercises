const ftoc = function(num) {
  num = (num-32) * (5/9);
  

    if (num != 0){
      num = num.toFixed(1) ;
      return (Number(num))
    }
    else {
      num = num.toFixed() ;
      return (Number(num))
    }
      
};

const ctof = function(num) {
  num = num *(9/5) + 32 ;

  if (num != 0){
    num = num.toFixed(1) ;
    return (Number(num))
  }
  else {
    num = num.toFixed() ;
    return (Number(num))
  }
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
