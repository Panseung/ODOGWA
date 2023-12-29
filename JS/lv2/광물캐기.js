function solution(picks, minerals) {
  let answer = 0;
  const getStress = function(tool, target) {
    if (tool === 'diamond') {
      return 1
    } else if (tool === 'iron') {
      return target === 'diamond' ? 5 : 1
    } else if (tool === 'stone') {
      return target === 'diamond' ? 25 : target === 'iron' ? 5 : 1
    }
  }

  const parsedArr = []
  const sumPicks = picks.reduce((acc, curV) => {
    return acc + curV
  }, 0)
  const mineralLength = minerals.length
  const picksLength = sumPicks * 5
  const minLength = mineralLength > picksLength ? picksLength : mineralLength
  
  for (let i = 0; i < minLength; i += 5) {
    const arr = minerals.slice(i, i+5)
    let arrScore = 0
    arr.forEach((v) => {
      if (v === 'diamond') {
        arrScore += 25
      } else if (v === 'iron') {
        arrScore += 5
      } else {
        arrScore += 1
      }
    })

    parsedArr.push({arr, arrScore})
  }

  const sortedArr = parsedArr.sort((a, b) => b.arrScore - a.arrScore)
  let idx = 0
  for (let i = 0; i < picks.length; i ++) {        
    for (let j = 0; j < picks[i]; j ++) {
      const tool = i === 0 ? 'diamond' : i === 1 ? 'iron' : 'stone'
      sortedArr[idx].arr.forEach((v) => {
        answer += getStress(tool, v)
      })
      idx += 1
      if (idx >= parsedArr.length) {
        break
      }
    }
    if (idx >= parsedArr.length) {
      break
    }
  }

  return answer;
}