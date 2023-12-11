function solution(survey, choices) {
  let answer = '';
  const obj = {
    'R': 0,
    'T': 0,
    'C': 0,
    'F': 0,
    'J': 0,
    'M': 0,
    'A': 0,
    'N': 0,
  }
  for (let i = 0; i < survey.length; i ++) {
    const left = survey[i][0]
    const right = survey[i][1]

    let score = choices[i]
    if (score < 4) {
      if (score === 1) {
        score = 3
      } else if (score === 3) {
        score = 1
      }
      obj[left] += score
    } else if (score > 4) {
      score -= 4
      obj[right] += score
    }
  }

  obj.R >= obj.T ? answer += 'R' : answer += 'T'
  obj.C >= obj.F ? answer += 'C' : answer += 'F'
  obj.J >= obj.M ? answer += 'J' : answer += 'M'
  obj.A >= obj.N ? answer += 'A' : answer += 'N'
  return answer;
}

solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])
solution(["TR", "RT", "TR"], [7, 1, 3])