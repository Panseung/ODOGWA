function solution(r1, r2) {
  let answer = 0;
  for (let y = 1; y <= r2; y ++) {
    let maxX = Math.floor((r2 ** 2 - y ** 2) ** 0.5)
    let minX = Math.ceil((r1 ** 2 - y ** 2) ** 0.5)
    minX = minX > 0 ? minX : 0

    answer += maxX - minX + 1
  }
  return answer * 4;
}