let result = +prompt('Ведите число?');
console.log(typeof result );


if(typeof result !== "number" || isNaN(result)){
    console.log("Упс, кажется, вы ошиблись");
}

else if(result%2 ===  0 ){
    console.log('четное')

}
else if(result%2 !==0 ){
    console.log('нечетное')

}

// Код работает неверно: при вводе чисел выводится "Упс, кажется, вы ошиблись", а при вводе знаков или букв - что число нечетное. Так происходит из-за неверно заданного условия в первом if. Выше исправила