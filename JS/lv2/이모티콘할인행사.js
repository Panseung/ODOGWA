function solution(users, emoticons) {
  const answer = [0, 0];

  const discountRateList = [10, 20, 30, 40]
  const priceCombList = []

  const getPriceList = function(idx, resList) {
    if (emoticons.length >= idx + 1) {
      discountRateList.forEach((v) => {
        const nextList = [...resList]
        nextList.push([v, emoticons[idx] * (100 - v) * 0.01])
        getPriceList(idx + 1, nextList)
      })
    } else {
      priceCombList.push(resList)
    }
  }

  getPriceList(0, [])

  priceCombList.forEach((v) => {
    let userCnt = 0
    let totalPrice = 0
    users.forEach(([userRate, userPrice]) => {      
      let sumPrice = 0

      v.forEach(([rate, price]) => {
        if (rate >= userRate) {
          sumPrice += price
        }
      })

      if (sumPrice >= userPrice) {
        userCnt += 1        
      } else {
        totalPrice += sumPrice
      }
    })

    if (userCnt > answer[0]) {
      answer[0] = userCnt
      answer[1] = totalPrice
    } else if (userCnt === answer[0] && totalPrice > answer[1]) {
      answer[1] = totalPrice
    }
  })

  return answer;
}

console.log(solution([[40, 10000], [25, 10000]], [7000, 9000]))
console.log(solution([[40, 2900], [23, 10000], [11, 5200], [5, 5900], [40, 3100], [27, 9200], [32, 6900]], [1300, 1500, 1600, 4900]))

// [1, 5400], [4, 13860]