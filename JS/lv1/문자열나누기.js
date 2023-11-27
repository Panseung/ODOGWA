function solution(s) {
  var answer = 0
  let resWord = s
  let loopStop = false

  while (!loopStop) {
    if (resWord.length < 1) {
      break
    }
    const alpha = resWord[0]
    let alphaCnt = 1
    let otherCnt = 0
    let idx = 1
    while (alphaCnt !== otherCnt) {
      if (idx > resWord.length) {
        loopStop = true
        break
      }
      resWord[idx] === alpha ? alphaCnt += 1 : otherCnt += 1
      idx += 1
    }
    answer += 1
    resWord = resWord.substring(idx, resWord.length)
  }

  return answer;
}

// console.log(solution("abaa"))
// console.log(solution("banana"))
// console.log(solution("abracadabra"))
// console.log(solution("aaabbaccccabba"))

// 3 6 3
