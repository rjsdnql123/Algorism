let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const breakLine = Number(input.shift().split(" ")[0]);

const lineSet = 6;

const mapping = input.reduce(
  (acc, cur, index) => {
    const [listA, listB] = cur.split(" ");
    acc[0].push(Number(listA));
    acc[1].push(Number(listB));
    return acc;
  },
  [[], []]
);

function solution() {
  const packageMin = mapping[0].sort((a, b) => a - b)[0];
  const IndividualMin = mapping[1].sort((a, b) => a - b)[0];

  const packageOfValue = packageMin / 6;
  const packagOfRemainder = packageMin % 6;

  let result = 0;
  
  if (packageOfValue >= IndividualMin) {
    // 개별로 사는게 더 싼가?
    // 그렇다면 개별 구매
    result = IndividualMin * breakLine;
  } else {
    // 세트 구매가 더 저렴하다.

    // 세트로 몇개를 살 것인가?
    // 세트로 살 수 있는 줄의 수

    const setSel = Math.floor(breakLine / lineSet);

    const setPrice = packageMin;
    const individualPrice = IndividualMin * (breakLine - setSel * lineSet);
    if (setPrice <= individualPrice) {
      result = setSel * setPrice + packageMin;
    } else {
      result =
        setSel * packageMin + IndividualMin * (breakLine - setSel * lineSet);
    }
  }

  console.log(result);
}
// 15 - 12 = 3
solution();
