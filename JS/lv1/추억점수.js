function solution(name, yearning, photo) {    
  var answer = [];
  const scoreObj = {}
  for (let i = 0; i < name.length; i++) {
    scoreObj[name[i]] = yearning[i]
  }
  for (let i = 0; i < photo.length; i ++) {
    const piece = photo[i]
    let score = 0
    for (let j = 0; j < piece.length; j ++ ) {
    score += scoreObj[piece[j]] || 0   
    }
    answer.push(score)
  }
  return answer;
}