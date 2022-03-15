
const caesar = function(message,n) {
    
    let unicodedCaesarMessage = [];
    let ceasarMessage = "";


    for (let i = 0 ; i < message.length ; i++){

        if((message.charCodeAt(i)>= 32 && message.charCodeAt(i)<= 64) ||(message.charCodeAt(i)>= 91 && message.charCodeAt(i)<= 96)||(message.charCodeAt(i)>= 123 && message.charCodeAt(i)<= 126)){ // for special characters
            unicodedCaesarMessage.push(message.charCodeAt(i))
        }

        else if (((message.charCodeAt(i)) >= 65 && (message.charCodeAt(i)) <= 90) && ((message.charCodeAt(i)+n) > 90 )){
            let excess = (n % 26)-(90-(message.charCodeAt(i))) + 64 ;
            unicodedCaesarMessage.push(excess) ; // for uppercase and (+)n value

        }

        else if (((message.charCodeAt(i)) >= 65 && (message.charCodeAt(i)) <= 90) && ((message.charCodeAt(i)+n) < 65 ) && n < 0){
            let excess = ((90+message.charCodeAt(i)) + (n % 26)- 64) ;
            if (excess > 90){
                excess = ((90+message.charCodeAt(i)) + (n % 26)- 90)
            }
            unicodedCaesarMessage.push(excess) ; // for uppercase and (-)n value

        }

        else if (((message.charCodeAt(i)) >= 97 && (message.charCodeAt(i)) <= 122) && ((message.charCodeAt(i)+n) > 122 )){
            let excess = ((n) % 26)-(122-(message.charCodeAt(i))) + 96 ;
            unicodedCaesarMessage.push(excess) ; //for lowercase and (+)n value


        }

        else if (((message.charCodeAt(i)) >= 97 && (message.charCodeAt(i)) <= 122) && ((message.charCodeAt(i)+n) < 122 ) && n < 0){
            let excess = ((90+message.charCodeAt(i)) + (n % 26)- 64) ;
            if (excess > 90){
                excess = ((90+message.charCodeAt(i)) + (n % 26)- 90)
            }
            unicodedCaesarMessage.push(excess) ; // for lowercase and (-)n value

        }


         else {
             let ceasarCode = (message.charCodeAt(i)) + n ;
            unicodedCaesarMessage.push(ceasarCode) ;
         }
        
    }

    for (let i = 0 ; i < unicodedCaesarMessage.length ; i++){
        ceasarMessage += (String.fromCharCode(unicodedCaesarMessage[i]))

    }

 
    return ceasarMessage ;
    

}
console.log(caesar('Hello, World!', -29))
// Do not edit below this line
module.exports = caesar;
