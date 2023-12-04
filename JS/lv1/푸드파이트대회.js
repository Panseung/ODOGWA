function solution(food) {
  let answer = '';
  const obj = {}
  for (let i = 1; i < food.length; i ++) {
    let num = food[i]
    if (num % 2) {
      num -= 1
    }
    obj[i] = num
  }

  for (let i = 1; i < food.length; i ++) {
    obj[i] /= 2
    num = obj[i]
    for (j = 0; j < num; j ++) {
      answer += String(i)
    }
  }
  answer += '0'
  for (let i = food.length; i > 0; i --) {
    num = obj[i]
    for (j = 0; j < num; j ++) {
      answer += String(i)
    }
  }

  return answer;
}

console.log(solution([1, 3, 4, 6]))
console.log(solution([1, 7, 1, 2]))

// 1223330333221
// 111303111