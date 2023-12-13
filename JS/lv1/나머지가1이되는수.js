function solution(n) {
  let answer = 0;
  let num = 1
  while (answer === 0) {
    if (n % num === 1) {
      answer = num
    } else {
      num += 1
    }
  }
  return answer;
}

console.log(solution(10))
console.log(solution(12))