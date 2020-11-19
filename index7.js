var listOfNumbers = [2,3,4,5,6,3,3,0,null,'dscd',NaN];
var evenNumber=0;
var notEvenNumber=0;
var zero = 0;
for (var i=0;i<listOfNumbers.length;i++){

    if (typeof listOfNumbers[i] !== 'number' || isNaN(listOfNumbers[i])){
        break;
    }
   else if (listOfNumbers[i] === 0){
        zero += 1;
    }
   else if (listOfNumbers[i]%2 === 0){
        evenNumber += 1;
    }
   else if (listOfNumbers[i]%2 !== 0  ){
        notEvenNumber += 1;

    }


}
console.log(`четных ${evenNumber}`);
console.log(`не четных ${notEvenNumber}`);
console.log(`ноль  ${zero}`);

// Почти правильно, но не учтено значение NaN. Оно тоже имеет тип number, поэтому пройдет проверку на typeof, но при этом NaN не является числом, поэтому его нельзя учитывать при подсчете четных\нечетных и нулей. Добавила выше проверку на NaN.