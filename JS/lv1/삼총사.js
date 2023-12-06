function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length - 2; i ++) {
    for (let j = i + 1; j < number.length - 1; j ++) {
      for (let k = j + 1; k < number.length; k ++) {
        const sum = number[i] + number[j] + number[k]
        if (sum === 0) {
          answer += 1
        }
      }
    }
  }
  return answer;
}


console.log(solution([-2, 3, 0, 2, -5]))
console.log(solution([-3, -2, -1, 0, 1, 2, 3]))
console.log(solution([-1, 1, -1, 1]))

// 2 5 0