function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i ++) {
    const numSet = new Set()
    const sqrt = Math.floor(Math.sqrt(i))
    for (let j = 1; j <= sqrt; j ++) {
      if (!(i % j)) {
        numSet.add(j)
        numSet.add(i / j)
      }
    }
    const cnt = numSet.size
    cnt > limit ? answer += power : answer += cnt
  }
  return answer;
}

console.log(solution(5,3,2))
console.log(solution(10,3,2))

// 10, 21