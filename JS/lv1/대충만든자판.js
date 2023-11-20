function solution(keymap, targets) {
  var answer = [];
  const alphaObj = {}
  for (let i = 65; i <= 90; i++) {
    let alpha = String.fromCharCode(i);
    alphaObj[alpha] = 0;
  }
  
  for (let i = 0; i < keymap.length; i++) {
    const keyList = keymap[i]
    for (let j = 0; j < keyList.length; j++){
      const alpha = keyList[j]
      if (alphaObj[alpha] === 0) {
        alphaObj[alpha] = j + 1
      } else if (alphaObj[alpha] > j) {
        alphaObj[alpha] = j + 1
      }
    }
  }
  
  for (let i = 0; i < targets.length; i ++) {
    let sumVal = 0
    const target = targets[i]
    for (let j = 0; j < target.length; j ++) {
      const alpha = target[j]
      if (alphaObj[alpha] === 0) {
        sumVal = -1
        break
      }
      sumVal += alphaObj[alpha]
    }
    answer.push(sumVal)
  }

  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD","AABB"]))
console.log(solution(["AA"], ["B"]))
console.log(solution(["AGZ", "BSSS"], ["ASA","BGZ"]))