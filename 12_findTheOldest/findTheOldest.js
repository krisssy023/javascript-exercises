
const findTheOldest = function(people) {
    let peopleWithAge = people ;
    let peopleAgeList = [];

   

 peopleWithAge.forEach(object => { //inserts age key
        object.age = '';
        });

     for (let i = 0; i <peopleWithAge.length; i++){ 

        function doesKeyExists(obj,key){
            return key in obj;
        }
         if ((doesKeyExists(peopleWithAge[i],"yearOfDeath")) === false){
             peopleWithAge[i].yearOfDeath = new Date().getFullYear()

        }
     }


   for (let i = 0; i <peopleWithAge.length; i++){  //inserts age value
      age = ((people[i].yearOfDeath) -(people[i].yearOfBirth)) ;
      peopleAgeList.push(age) ;
      peopleWithAge[i].age = age ;
      
     }

    peopleWithAge.sort((a, b) => {
        return b.age - a.age;
    });

    let oldest = peopleWithAge[0] ;
    return oldest ;
};
 
// Do not edit below this line
module.exports = findTheOldest;
