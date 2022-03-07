
function removeFromArray(arr,...toRemove){

   
   let removed = arr.filter( item => toRemove.includes(item));

   for (let i = 0 ; i < arr.length ; i++){
       for (let j=0 ; j <removed.length ; j++){

        if ( arr [i]== removed[j]){
            arr.splice (i,1);
            
        }
       }
      
   }

 return arr ;
}


removeFromArray([1,2,2,3,"hey"],"1",2,3,"hey")


// Do not edit below this line
module.exports = removeFromArray;
