let vegetables = ["carrot", "broccoli", "spinach", "kale", "potato"];
console.log( vegetables);
console.log( vegetables.sort());
console.log( vegetables.reverse());

let ages = [15, 42, 8, 30, 67, 56, 22];

function ascending(a, b) {
    return a - b;
}

function descending(a, b) {
    return b - a;
}

console.log( ages.sort(ascending));
console.log( ages.sort(descending));

function double(x) {
    return x * 2;
}

let doubledAges = ages.map(double);
console.log(doubledAges);

let number1 = 7;
let number2 = 3;
let sum = number1 + number2;
console.log(sum);
