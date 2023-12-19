let input = require("fs").readFileSync("예제.txt").toString().trim().split("\n")

const [L, C] = input.shift().split(' ').map((x) => Number(x))
const fill = ['a', 'e', 'i', 'o', 'u'];
const words = input.join('').split(' ')


function solution() {

  words.sort();

  console.log(words)
  const result = [];
  
  function backtracking(arr, L, C, words) {
    if (arr.length === L) {
        if (check(arr)) {
            // console.log(arr.join(""));
            return;
        }
    }

    for (let i = arr.length; i < C; i++) {
        if (arr[arr.length - 1] < words[i]) {
            arr.push(words[i]);
            backtracking(arr, L, C, words);
            arr.pop();
        }
    }
}
  
for (let i = 0; i <= C - L; i++) {
  const a = [words[i]];
  console.log(a)
  backtracking(a, L, C, words);
}

}

function check(arr) {
  let v_count = 0, c_count = 0;

  const vowel = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < arr.length; i++) {
      if (vowel.includes(arr[i])) {
          v_count++;
      } else {
          c_count++;
      }
  }

  return v_count >= 1 && c_count >= 2;
}

solution();

// 조합 문제 인데

// fill에서 한개 이상을 꺼내서 사용 해야 함
// fill에서 하나 뽑고, 그거와 일치하는것이 있는지 확인 후 있으면 그걸 갖고 조합
// fill에서 뽑은거 하나, 나머지는 fill에 없는거
// fill에 없는거 최소 2개 필요함