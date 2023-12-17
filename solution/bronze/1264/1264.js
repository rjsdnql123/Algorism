let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map((str) => str.toLowerCase())


// 중간에 0 0 이 들어 갈수 있나요?
function solution() {
  const example = ['a', 'e', 'i', 'o', 'u'];
  
  for(let i = 0; i < input.length; i++) {
    let count = 0;
    for(let j = 0; j < input[i].length; j++) {
      if(input[i][j] === '#') {
        return;
      }
      if(example.includes(input[i][j])){
        count ++;
      }
    }
    console.log(count)
  }

}

solution();
