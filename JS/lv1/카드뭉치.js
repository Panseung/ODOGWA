function solution(cards1, cards2, goal) {
  let answer = 'Yes';

  let firstIdx = 0
  let secondIdx = 0
  for (let i = 0; i < goal.length; i ++) {
    const word = goal[i]
    
    if (cards1[firstIdx] === word && firstIdx < cards1.length) {
      firstIdx += 1
    } else if (cards2[secondIdx] === word && secondIdx < cards2.length) {
      secondIdx += 1
    } else {
      answer = 'No'
      break
    }
  }
  return answer;
}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]))
console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]))
