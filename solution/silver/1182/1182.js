let input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");

const [length ,resultValue] = input.shift().split(' ').map((x) => Number(x));

const initArr = input.shift().split(' ').map((x) => Number(x)).sort((a, b) => a - b);

function solution() {
  let results = []
  for(let i = 1; i <= length; i++) {
    results.push(...getCombinations(initArr, i))
  }

  let count = 0;
  for(let i = 0; i < results.length; i++) {
    const plus = results[i].reduce((acc, cur) => acc + cur, 0);
    if(plus == resultValue) {
      count++;
    }
  }
  console.log(count)

}

const getCombinations = (arr, selectIndex) => {
  const results = [];

  if(selectIndex === 1) return arr.map((x) => [x]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(index + 1)]

    const combis = getCombinations(rest, selectIndex - 1)
     const combine = combis.map((v) => [fixed, ...v]);
     
     results.push(...combine);
  });

  return results;
}


solution();
