function solution(X, Y) {
  let answer = '';
  const objX = {}
  const objY = {}
  for (let i = 0; i < 10; i ++) {
    objX[i] = 0
    objY[i] = 0
  }
  
  for (let i = 0; i < X.length; i ++) {
    objX[X[i]] += 1
  }
  for (let i = 0; i < Y.length; i ++) {
    objY[Y[i]] += 1
  }

  const obj = {}
  for (let i = 9; i >= 0; i --) {
    const valueX = objX[i]
    const valueY = objY[i]
    const value = valueX > valueY ? valueY : valueX
    obj[i] = value
  }

  for (let i = 9; i >= 0; i --) {
    if (obj[i]) {
      for (let j = 0; j < obj[i]; j ++) {
        answer += String(i)
      }
    }
  }

  if (answer === '') {
    answer = "-1"
  } else if (Number(answer) === 0) {
    answer = "0"
  }
  return answer;
}

console.log(solution("100",	"2345"))
console.log(solution("100",	"203045"))
console.log(solution("100",	"123450"))
console.log(solution("12321",	"42531"))
console.log(solution("5525",	"1255"))

// "-1" "0" "10" "321" "552"