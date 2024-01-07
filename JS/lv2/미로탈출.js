function solution(maps) {
  const board = []
  const exitPos = []
  const firstVisited = []
  const secondVisited = []
  const firstQueue = []
  const secondQueue = []

  for (let y = 0; y < maps.length; y ++) {
    const line = []
    const firstVisitedLine = []
    const secondVisitedLine = []
    for (let x = 0; x < maps[0].length; x ++) {
      line.push(maps[y][x])
      firstVisitedLine.push(false)
      secondVisitedLine.push(false)
      if (maps[y][x] === 'S') {
        firstVisitedLine.pop()
        firstVisitedLine.push(true)
        firstQueue.push([y, x, 0])
      } else if (maps[y][x] === 'L') {
        secondVisitedLine.pop()
        secondVisitedLine.push(true)
        secondQueue.push([y, x, 0])
      } else if (maps[y][x] === 'E') {
        exitPos.push(y)
        exitPos.push(x)
      }
    }
    board.push(line)
    firstVisited.push(firstVisitedLine)
    secondVisited.push(secondVisitedLine)
  }

  const movePossible = function(y, x) {
    if (y >= 0 && y < maps.length && x >= 0 && x < maps[0].length && maps[y][x] !== 'X') {
      return true
    } else {
      return false
    }
  }

  const dy = [-1, 0, 1, 0]
  const dx = [0, 1, 0, -1]

  let firstIdx = 0
  let firstAnswer = 0
  while (firstQueue.length > firstIdx && firstAnswer === 0) {
    const resY = firstQueue[firstIdx][0]
    const resX = firstQueue[firstIdx][1]
    const cnt = firstQueue[firstIdx][2]

    for (let i = 0; i < 4; i ++) {
      const newY = resY + dy[i]
      const newX = resX + dx[i]
      if (movePossible(newY, newX) && !firstVisited[newY][newX]) {
        if (board[newY][newX] === 'L') {
          firstAnswer = cnt + 1
          break
        }
        firstVisited[newY][newX] = true
        firstQueue.push([newY, newX, cnt + 1])
      }
    }

    firstIdx += 1
  }

  if (firstAnswer === 0) {
    return -1
  }

  let secondIdx = 0
  let secondAnswer = 0
  while (secondQueue.length > secondIdx && secondAnswer === 0) {
    const resY = secondQueue[secondIdx][0]
    const resX = secondQueue[secondIdx][1]
    const cnt = secondQueue[secondIdx][2]

    for (let i = 0; i < 4; i ++) {
      const newY = resY + dy[i]
      const newX = resX + dx[i]
      if (movePossible(newY, newX) && !secondVisited[newY][newX]) {
        if (board[newY][newX] === 'E') {
          secondAnswer = cnt + 1
          break
        }
        secondVisited[newY][newX] = true
        secondQueue.push([newY, newX, cnt + 1])
      }
    }

    secondIdx += 1
  }

  if (secondAnswer === 0) {
    return -1
  } else {
    return firstAnswer + secondAnswer
  }
}