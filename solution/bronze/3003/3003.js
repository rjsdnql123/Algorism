let input = require("fs").readFileSync("예제.txt").toString().split(" ").map((x) => Number(x));
console.log(input)
const origins = [1, 1, 2, 2, 2, 8];

function solution() {
    
    const result = origins.map((origin, index) => {
        return origin - input[index]
    })
    console.log(result.join(' '))
}

solution();
