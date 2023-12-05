function solution(a, b, n) {
  let answer = 0;
  cnt = n
  while (cnt) {
    const remain = cnt % a
    cnt -= remain
    
    answer += (cnt / a) * b
    cnt = (cnt / a) * b + remain

    if (cnt < a || cnt < 2) {
      cnt = 0
    }
  }
  return answer;
}

console.log(solution(2,1,20))
console.log(solution(3,1,20))
console.log(solution(3,2,20))
console.log(solution(5,3,21))
// 19 9