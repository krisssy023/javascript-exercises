const fibonacci = function(num) {
    let fibSequence = [ 0, 1 ];

        if (num < 0){
            return "OOPS"
        } else {
            for (let i = 2 ; i < num + 1 ; i++){

                 fibSequence.push(fibSequence[i-2]+ fibSequence [i-1]);
            }
            return (fibSequence[num]);
        }
      
};

// Do not edit below this line
module.exports = fibonacci;
