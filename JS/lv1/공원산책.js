function solution(park, routes) {
  var answer = [];
  for (let y = 0; y < park.length; y ++) {
    for (let x = 0; x < park[y].length; x ++) {
      if (park[y][x] === 'S') {
        answer.push(y)
        answer.push(x)
        break
      }
    }
    if (answer.length) {
      break
    }
  }

  const directionObj = {
    'N': [-1, 0],
    'S': [1, 0],
    'W': [0, -1],
    'E': [0, 1],
  }

  const validPos = function(x, y) {
    if (x >= 0 && x < park[0].length && y >= 0 && y < park.length) {
      return true
    } 
    return false
  }

  for (let i = 0; i < routes.length; i ++) {
    const [direction, cnt] = routes[i].split(' ')
    let newY = answer[0], newX = answer[1]
    let valid = true
    for (let j = 0; j < cnt; j ++) {
      const nextY = newY + directionObj[direction][0]
      const nextX = newX + directionObj[direction][1]    
      if (validPos(nextX, nextY) && (park[nextY][nextX] === 'O' || park[nextY][nextX] === 'S') ) {
        newY = nextY
        newX = nextX
      } else {
        valid = false
        break
      }
    }

    if (valid) {
      answer = [newY, newX]
    }
  }
  return answer;
}