let input = require('fs').readFileSync('예제.txt').toString().split(' ');

// 수가 높은 값을 정수로 내보내고 싶을 때 BigInt를 사용해서 계산 해주어야 한다.

let money = BigInt(input[0]);
let human = BigInt(input[1]);

let splitMoney = money / human;

let other = money % human;

console.log(splitMoney.toString())

console.log(other.toString())
