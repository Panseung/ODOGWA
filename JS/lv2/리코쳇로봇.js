function solution(board) {
  let answer = -1;
  const boardArr = []
  const visitedArr = []      
  const dy = [-1, 0, 1, 0]
  const dx = [0, 1, 0, -1]
  let queueIdx = 0
  const queue = []

  for (let i = 0; i < board.length; i ++) {
    const line = []
    const visitedLine = []
    for (let j = 0; j < board[i].length; j ++) {
      line.push(board[i][j])
      visitedLine.push(false)
      if (board[i][j] === 'R') {
        queue.push([i, j, 0])
        visitedLine.pop()
        visitedLine.push(true)
      }
    }
    boardArr.push(line)
    visitedArr.push(visitedLine)
  }

  const movePossible = function(y, x) {
    if (
      y >= 0 && 
      y < board.length && 
      x >= 0 && 
      x < board[0].length &&
      boardArr[y][x] !== 'D') {
        return true
      } else {
        return false
      }
  }

  while (queue.length > queueIdx) {
    for(let d = 0; d < 4; d ++) {
      if (answer !== -1) {
        break
      }

      let resY = queue[queueIdx][0]
      let resX = queue[queueIdx][1]
      let cnt = queue[queueIdx][2]
      while (true) {
        const newY = resY + dy[d]
        const newX = resX + dx[d]
        if (movePossible(newY, newX)) {
          resY = newY
          resX = newX
        } else {              
          if (boardArr[resY][resX] === 'G') {
            answer = cnt + 1
            queueIdx += queue.length + 100
            break
          }
          if (!visitedArr[resY][resX]) {
            queue.push([resY, resX, cnt + 1])
            visitedArr[resY][resX] = true
          }
          break
        }
      }
    }        
    queueIdx += 1
  }
  return answer;
}