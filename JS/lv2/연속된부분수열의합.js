function solution(sequence, k) {
  const answer = [0, 0]
  let start = 0
  let end = 0
  let sumV = sequence[0]
  let distance = sequence.length
  let cnt = 0

  while (end < sequence.length) {
    if (sumV === k) {
      const resDistance = end - start
      if (resDistance < distance) {
        answer[0] = start
        answer[1] = end
        distance = resDistance
      }
      sumV -= sequence[start]
      start += 1
    } else if (sumV < k) {
      end += 1
      sumV += sequence[end]
    } else if (sumV > k) {
      sumV -= sequence[start]
      start += 1
    }
  }
  
  return answer
}