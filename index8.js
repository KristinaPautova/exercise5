const myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (var[kay, value] of myMap) {
    console.log(`Ключ — ${kay}, значение — ${value}`)
}

