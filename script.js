const a = 38
const b = 8


function add(x, y){
    var sum = x + y;
    return sum;
}


function subtract(x, y){
    var sum = x-y;
    return sum;
}

function multiply(x, y){
    var sum = x * y;
    return sum;
}

function divide(x, y){
    var sum = x/y;
    return sum;
}

let svar1 = add(a, b);
console.log('add: ' + svar1);

let svar2 = subtract(a, b);
console.log('subtract ' + svar2)

let svar3 = multiply(a, b);
console.log('multiply ' + svar3)

let svar4 = divide(a, b);
console.log('divide ' + svar4)