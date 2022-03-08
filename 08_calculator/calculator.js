const add = function(a,b) {
  let sum = a + b ;
  return sum ;
	
};

const subtract = function(a,b) {
  let difference = a - b ;
  return difference ;
	
};

const sum = function(valuesToSum) {
  let sumOfValues ;
  sumOfValues = valuesToSum.reduce((partialSum, a) => partialSum + a, 0);
   return sumOfValues;
}



const multiply = function(valuesToMultiply) {

  let values = valuesToMultiply;
  let product= 1;

  for (let i = 0 ; i < values.length ;i++){
    product *= values[i] ;
  }
  return product ;
}


const power = function(a,b) {
	let result = Math.pow (a,b) ;
  return result ;
};

const factorial = function(n) {
	let answer = 1;
    if (n == 0 || n == 1){
     return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
    }
    return answer;
  }  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
