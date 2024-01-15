function solution(weights) {
  let answer = 0;      
  const weightObj = {}
  const weightList = []
  weights.forEach((v) => {
    if (weightObj?.[v]) {
      weightObj[v] += 1
    } else {
      weightList.push(v)
      weightObj[v] = 1
    }
  })

  weightList.forEach((v) => {
    answer += weightObj[v] * (weightObj[v] - 1) / 2
    if (Number.isInteger(v * 1.5) && weightObj?.[v * 1.5]) {
      answer += weightObj[v] * weightObj[v * 1.5]
    }
    if (Number.isInteger(v * 2) && weightObj?.[v * 2]) {
      answer += weightObj[v] * weightObj[v * 2]
    }
    if (Number.isInteger(v * 4/3) && weightObj?.[v * 4/3]) {
      answer += weightObj[v] * weightObj[v * 4/3]
    }
  })
  
  return answer;
}