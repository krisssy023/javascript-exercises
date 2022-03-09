const palindromes = function (str) {
    str = str = str.replace(/\s+/g, ''); // removes whitespace
    let stringNoPunctuation = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    let stringToLowerCase = stringNoPunctuation.toLowerCase() ;

    let reverseString = stringToLowerCase.split("").reverse().join("");
    
        if (stringToLowerCase === reverseString){
            return true ;
        } else {
            return false ;
        }
}

// Do not edit below this line
module.exports = palindromes;
