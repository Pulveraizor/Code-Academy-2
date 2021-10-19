let arr = {
    key1: 57,
    key2: 'item2',
    key3: 'item3',
    key4: 'item4'
};
let arr2 = [
    'item1',
    'item2',
    'item3'
]

let multiArr = [
    1,
    'two',
    ['three'],
    function() {
    return 'Hello';
    }
]

console.log(Array.isArray(arr), Array.isArray(arr2));
console.log(multiArr[3]());