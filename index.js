function solution(players, callings) {  
  let playersObj = {}
  for (let i = 0; i < players.length; i++) {
      const name = players[i]
      playersObj[name] = i
  }
  
  const findPlayerByRank = function(rank) {
      console.log('rank: ', rank)
      for (let i = 0; i < players.length; i++) {
          const name = players[i]
          if (playersObj[name] === rank) {
              return name
          }
      }
  }
  
  for (let i = 0; i < callings.length; i++) {
      const name = callings[i]
      const rank = playersObj[name]
      const prePlayerName = findPlayerByRank(rank - 1)
      playersObj[prePlayerName] += 1
      playersObj[name] -= 1
      console.log(playersObj)
  }
  
  var answer = [];
  for (let i = 0; i < players.length; i ++) {
    const name = findPlayerByRank(i)
    answer.push(name)
  }
  return answer;
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])