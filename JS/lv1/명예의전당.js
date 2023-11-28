function solution(k, score) {
  var answer = [];
  const scoreList = score.slice(0, k)
  scoreList.sort((a, b) => a - b)

  answer.push(score[0])
  score[0] > score[1] ? answer.push(score[1]) : answer.push(score[0])

  const minVal = k > score.length ? score.length : k
  for (let i = 2; i < minVal; i ++) {
    answer[i-1] > score[i] ? answer.push(score[i]) : answer.push(answer[i-1])    
  }

  for (let i = minVal; i < score.length; i ++) {
    if (score[i] <= scoreList[0]) {
      answer.push(scoreList[0])
    } else {
      scoreList[0] = score[i]
      scoreList.sort((a, b) => a - b)
      answer.push(scoreList[0])
    }
  }

  return answer
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]))
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]))
// [10, 10, 10, 20, 20, 100, 100]
// [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]