let fruits = ["apple" , "cherrry", "pitanga", "zalzalak", "blackberry"]
console.log(fruits)
console.log(fruits.sort())
console.log(fruits.reverse())
let numbers = [1,20,4,2,1000, 800,300]

function ascending (a,b){
    return a - b
}
function descending (a,b){
return b - a
}
console.log(numbers.sort(ascending))
console.log(numbers.sort(descending))
function double(x){
    return x*2
}
let doublednumbers = numbers.map(double)
console.log(doublednumbers)
//eval
console.log(eval(7 + 3))