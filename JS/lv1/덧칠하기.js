function solution(n, m, section) {
  let answer = 0;
  let endIdx = 0
  for (let i = 0; i < section.length; i ++) {
    const blockNum = section[i]
    if (blockNum > endIdx) {
      answer += 1
      endIdx = blockNum + m - 1
    }
  }

  return answer;
}