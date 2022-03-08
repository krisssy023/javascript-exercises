function leapYears(num){

     if (( num % 400 === 0 )||(( num % 100 != 0) && (num % 4 === 0))){
         return true ;
     }
     else {
         return false ;
     }
    
};


// Do not edit below this line
module.exports = leapYears;
