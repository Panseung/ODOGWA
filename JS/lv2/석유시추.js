function solution(land) {
  let answer = 0;
  const y_len = land.length
  const x_len = land[0].length
  const dx = [-1, 0, 1, 0]
  const dy = [0, -1, 0, 1]

  const findSize = function(res_y, res_x, visited, oilNum, mapObj) {
    for (let i = 0; i < 4; i ++) {
      const new_y = res_y + dy[i]
      const new_x = res_x + dx[i]

      if (new_y >= 0 && new_x >= 0 && new_y < y_len && new_x < x_len && !visited[new_y][new_x] && land[new_y][new_x]) {
        visited[new_y][new_x] = oilNum
        mapObj[oilNum] += 1
        findSize(new_y, new_x, visited, oilNum, mapObj)
      }
    }
  }

  const visited = Array.from({length: y_len}, () => Array(x_len).fill(0))
  const mapObj = {}
  let oilNum = 2
  for (let y = 0; y < y_len; y ++) {
    for (let x = 0; x < x_len; x ++) {
      if (!visited[y][x] && land[y][x]) {
        visited[y][x] = oilNum
        mapObj[oilNum] = 1
        findSize(y, x, visited, oilNum, mapObj)
        oilNum += 1
      }
    }
  }

  for (let x = 0; x < x_len; x ++) {
    let oilNumSet = new Set()
    for (let y = 0; y < y_len; y ++) {
      if (visited[y][x]) {
        oilNumSet.add(visited[y][x])
      }
    }

    let tmpAnswer = 0
    oilNumSet.forEach((v) => {
      tmpAnswer += mapObj[v]
    })
    
    if (tmpAnswer > answer) {
      answer = tmpAnswer
    }
  }

  return answer;
}

console.log(solution([[0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 1, 1]]))
console.log(solution([[1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]]))
// 9 16