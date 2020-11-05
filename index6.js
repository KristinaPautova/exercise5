listOfNumbers = [5,5,5,6]

var mostRepeatedNumber = 0;
for (var i = 0;i<listOfNumbers.length;i++){
    for (var k = 0;k<listOfNumbers.length;k++){
        if (listOfNumbers[i] === listOfNumbers [k]){
            mostRepeatedNumber = true
    } else{
        mostRepeatedNumber = false;
        break;
    }}
}
console.log(mostRepeatedNumber)


