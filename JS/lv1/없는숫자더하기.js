function solution(numbers) {
  let answer = 0;
  obj = {}
  for (let i = 0; i < 10; i ++) {
    obj[i] = 0
  }

  for (let i = 0; i < numbers.length; i ++) {
    obj[numbers[i]] += 1
  }
  
  for (let i = 0; i < 10; i ++) {
    if (obj[i] === 0) {
      answer += i
    }
  }

  return answer;
}

console.log(solution([1,2,3,4,6,7,8,0]))
console.log(solution([5,8,4,0,6,7,9]))