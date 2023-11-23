function solution(t, p) {
  var answer = 0;

  for (let i = 0; i <= t.length - p.length; i ++) {
    let number = ''
    for (let j = 0; j < p.length; j ++) {
      number += t[i + j]
    }
    if (Number(number) <= Number(p)) {
      answer += 1
    }
  }
  return answer;
}