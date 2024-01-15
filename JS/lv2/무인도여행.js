function solution(maps) {
  const answer = [];
  const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));

  const dy = [-1, 0, 1, 0]
  const dx = [0, 1, 0, -1]
  const validator = function(y, x) {
    if (y >= 0 && x >= 0 && y < maps.length && x < maps[0].length && maps[y][x] !== 'X') {
      return true
    } else {
      return false
    }
  }

  const measureSize = function(y, x) {
    const queue = [[y, x]]
    let queueIdx = 0
    let sumV = Number(maps[y][x])
    while (queueIdx < queue.length) {
      for (let i = 0; i < 4; i ++) {
        const item = queue[queueIdx]
        const newY = item[0] + dy[i]
        const newX = item[1] + dx[i]
        if (validator(newY, newX) && !visited[newY][newX]) {
          visited[newY][newX] = true
          sumV += Number(maps[newY][newX])
          queue.push([newY, newX])
        }
      }
      queueIdx += 1
    }
    return sumV
  }

  for (let y = 0; y < maps.length; y ++) {
    for (let x = 0; x < maps[0].length; x ++) {
      if (validator(y, x) && !visited[y][x]) {
        visited[y][x] = true
        answer.push(measureSize(y, x))
      }
    }
  }
  answer.sort((a, b) => a - b)
  return answer.length > 0 ? answer : [-1]
}