function solution(s, skip, index) {
  var answer = '';
  const skipAsciiList = []
  for (let i = 0; i < skip.length; i++) {
    skipAsciiList.push(skip[i].charCodeAt(0))
  }

  for (let i = 0; i < s.length; i++) {
    let ascii = s[i].charCodeAt(0)
    for (let j = 0; j < index; j++) {
      ascii += 1
      if (ascii === 123) {
        ascii = 97
      }

      let pass = false
      while (!pass) {
        if (skipAsciiList.some(function(num) {
          return num === ascii
        })) {
          ascii += 1
          if (ascii === 123) {
            ascii = 97
          }
        } else {
          pass = true
        }
      }
    }
    answer += String.fromCharCode(ascii)

  }


  return answer;
}