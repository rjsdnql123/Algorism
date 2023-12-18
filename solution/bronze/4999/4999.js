let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .split("\n")

// 중간에 0 0 이 들어 갈수 있나요?
function solution() {
  const [str1, str2] = input

  if(str1.length >= str2.length) {
    console.log('go')
    return null;
  }
  console.log('no')
}

solution();






