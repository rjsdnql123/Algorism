let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map((x) => x.split(" "))
  .map((x) => {
    return [Number(x[0]), Number(x[1])]
  })
  console.log(input)

// 중간에 0 0 이 들어 갈수 있나요?
function solution() {
  for (let i = 0; i < input.length; i++) {
    const [num1, num2] = input[i];
    if(!num1 && !num2) {
        return null;
    }
    if(num1 > num2) {
        console.log('Yes')
    }else {
        console.log('No')
    }
  }
}

solution();






