function removeFromArray(array, toRemove) {
    return array.filter (v =>{
        return !toRemove.includes(v) ;
    })
    
};

console.log(removeFromArray([1,2,3,4,"hey"],["1",2,3,4,"hey"]))

// Do not edit below this line
module.exports = removeFromArray;
