function solution(x, y, n) {
  if (x === y) {
      return 0
    }
    let answer = -1;
    const visited = []
    for (let i = 0; i <= y; i ++) {
      visited.push(false)
    }
    const queue = [[x, 0]]
    let queueIdx = 0
    const calcList = [2, 3, n]
    while (queue.length > queueIdx) {
      const item = queue[queueIdx]
      const [num, cnt] = item
      queueIdx += 1
      
      for (let i = 0; i < 3; i ++) {
        const calcedNum = i === 2 ? num + calcList[i] : num * calcList[i]
        if (calcedNum === y) {
          if (answer === -1) {
            answer = cnt + 1
          } else if (answer > cnt + 1) {
            answer = cnt + 1
          }

        } else if (calcedNum < y && !visited[calcedNum]) {
          queue.push([calcedNum, cnt + 1])
          visited[calcedNum] = true
        }
      }
    }
    return answer;
  }