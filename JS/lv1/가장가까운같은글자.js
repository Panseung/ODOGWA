function solution(s) {
  var answer = [];
  const alphaObj = {}
  for (let i = 97; i < 123; i ++) {
    alphaObj[String.fromCharCode(i)] = -1
  }

  for (let i = 0; i < s.length; i ++) {
    const alpha = s[i]
    if (alphaObj[alpha] === -1) {
      answer.push(-1)
    } else {
      answer.push(i - alphaObj[alpha])
    }
    alphaObj[alpha] = i
  }
  return answer;
}
console.log(solution("banana"))
console.log(solution("foobar"))


// [-1, -1, -1, 2, 2, 2]
// [-1, -1, 1, -1, -1, -1]