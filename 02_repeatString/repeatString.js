function repeatString(string,num){
    if (num > 0)
    return string.repeat(num);
  else if(num <0)
  return "ERROR";
    else
    return "";

}

repeatString("hey",3)


// Do not edit below this line
module.exports = repeatString;
