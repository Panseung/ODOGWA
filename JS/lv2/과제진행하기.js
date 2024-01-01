function solution(plans) {
  const answer = [];
  plans.forEach((v, i) => {
    const time = v[1].split(':')
    const newTime = Number(time[0]) * 60 + Number(time[1])
    plans[i][1] = newTime
  })

  const sortedPlans = plans.sort((a, b) => a[1] - b[1])
  const remainStack = []
  
  for (let i = 1; i < sortedPlans.length; i ++) {
    let bonusTime = 0
    const prev = sortedPlans[i - 1]
    const res = sortedPlans[i]
    const needTime = Number(prev[2]) - bonusTime
    bonusTime = 0
    const gap = res[1] - prev[1]
    if (needTime > gap) {
      remainStack.push([prev[0], needTime - gap])
    } else if (needTime === gap) {
      answer.push(prev[0])
    } else if (needTime < gap) {
      answer.push(prev[0])
      bonusTime += gap - needTime
    }
    while (bonusTime && remainStack.length > 0) {
      const item = remainStack.pop()
      if (item[1] > bonusTime) {
        item[1] -= bonusTime
        bonusTime = 0
        remainStack.push(item)
      } else {
        answer.push(item[0])
        bonusTime -= item[1]
      }
    }
  }
  const last = plans[plans.length - 1]
  answer.push(last[0])
  while (remainStack.length > 0) {
    const item = remainStack.pop()
    answer.push(item[0])
  }
  return answer;
}