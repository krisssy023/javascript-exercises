
function sumAll(a,b){
    const sumValues = [];
    sumValues.push(a);
    sumValues.push(b);
    sumValues.sort(function(a,b){return a-b}) ;


    let max = sumValues[1];
    let min = sumValues[0];
    let number ;

    console.log(typeof(min));
    console.log(typeof (max));
    ;

   

    if (( min < 0 || max < 0 )||((typeof(a)) != "number"||(typeof(b)) != "number")){
         return "ERROR"
    } else {
        return ((max-min)+1) * (min + max) / 2;
    }


}   



// Do not edit below this line
module.exports = sumAll;
