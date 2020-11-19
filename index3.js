let str = 'Hello';
let newStr = '';
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
console.log(newStr);

// Задание выполнено верно, но есть чуть более простой способ сделать то же самое, без использования цикла: можно перевести строку в массив символов, перевернуть массив и собрать обратно в строку. Ниже показала, как это сделать

const reverseStr = str.split('').reverse().join('');
console.log(reverseStr);