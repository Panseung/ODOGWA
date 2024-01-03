function solution(m, n, startX, startY, balls) {
  const answer = [];
  balls.forEach((v) => {
    const ballX = v[0]
    const ballY = v[1]
    
    const newPosList = []

    if (ballX === startX) {
      if (ballY > startY) {
        newPosList.push([ballX, -ballY])
      } else {
        newPosList.push([ballX, 2 * n - ballY])
      }
    } else {
      newPosList.push([ballX, 2 * n - ballY])
      newPosList.push([ballX, -ballY])
    }

    if (ballY === startY) {
      if (ballX > startX) {
        newPosList.push([-ballX, ballY])
      } else {            
        newPosList.push([2 * m - ballX, ballY])
      }
    } else {
      newPosList.push([2 * m - ballX, ballY])
      newPosList.push([-ballX, ballY])
    }

    let answerItem = m ** 2 + n ** 2
    newPosList.forEach((vv, idx) => {
      const newX = vv[0]
      const newY = vv[1]
      
      const distance = (startX - newX) ** 2 + (startY - newY) ** 2
      if (distance < answerItem) {
        answerItem = distance
      }
    })
    answer.push(answerItem)
  })
  return answer;
}