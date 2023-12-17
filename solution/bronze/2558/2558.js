let input = require('fs').readFileSync('예제.txt').toString().split('\n');

let num1 = Number(input.shift());
let num2 = Number(input.shift());

function solution(num1, num2) {
    console.log(num1 + num2)
}

solution(num1, num2)