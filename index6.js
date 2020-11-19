let listOfNumbers = [5,5,5,6]

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

// Задание выполнено верно, однако использование 2-х циклов - избыточно, можно обойтись одним. Ниже написала более оптимальный вариант решения.
// Также есть небольшое замечание: старайтесь не использовать ключевое слово var для объявления переменных, это устаревший синтаксис. Лучше пользоваться более современными операторами: let или const

let isEqual = true;

for (let i = 1; i < listOfNumbers.length; i++) {
    if (listOfNumbers[0] !== listOfNumbers[i]) {
        isEqual = false;
        break;
    }
}

console.log(isEqual);