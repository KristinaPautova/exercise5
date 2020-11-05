let result = +prompt('Ведите число?');
console.log(typeof result );


if(typeof result !== Number || typeof result === NaN){
    console.log("Упс, кажется, вы ошиблись");
}

else if(result%2 ===  0 ){
    console.log('четное')

}
else if(result%2 !==0 ){
    console.log('нечетное')

}