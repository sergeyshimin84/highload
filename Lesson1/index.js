const arr = new Array;
const getArray = arrLength => {
    let i = 0;
    while (arr.length < arrLength) {
        i++;
        arr.push(i);
    }
    console.log(arr);
}
getArray(2000);

const testArr = (arr) => {
console.log('Тест Array')    
console.log('Поиск элемента:');
    let t0 = performance.now();
    console.time('test');
    console.log(arr.indexOf(500));
    let t1 = performance.now();
    console.timeEnd('test');
    console.log(t1 - t0, 'milliseconds');

console.log('Добавление элемента:')
    let t2 = performance.now();
    console.time('test');
    console.log(arr.push(2001));
    let t3 = performance.now();
    console.timeEnd('test');
    console.log(t3 - t2, 'milliseconds');

console.log('Удаление элемента:')
    let t4 = performance.now();
    console.time('test');
    console.log(arr.pop());
    let t5 = performance.now();
    console.timeEnd('test');
    console.log(t5 - t4, 'milliseconds');
    console.log('Результат удаления:', arr.length);
}
testArr(arr);

const testSet = (arr) => {
const set = new Set(arr);
console.log('Тест Set');      
console.log('Поиск элемента:');
    let t0 = performance.now();
    console.time('test');
    console.log(set.has(500));
    let t1 = performance.now();
    console.timeEnd('test');
    console.log(t1 - t0, 'milliseconds');
    
console.log('Добавление элемента:')
    let t2 = performance.now();
    console.time('test');
    console.log(set.add(2001));
    let t3 = performance.now();
    console.timeEnd('test');
    console.log(t3 - t2, 'milliseconds');
    
console.log('Удаление элемента:')
    let t4 = performance.now();
    console.time('test');
    console.log(set.delete(1000));
    let t5 = performance.now();
    console.timeEnd('test');
    console.log(t5 - t4, 'milliseconds');
    console.log('Результат удаления:', set.size);    
}
testSet(arr)


