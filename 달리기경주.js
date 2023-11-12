function solution(players, callings) {
    const idxObj = {}
    for (let i = 0; i < players.length; i++) {
        idxObj[players[i]] = i
    }

    for (let i = 0; i < callings.length; i++) {
        const name = callings[i]
        const idx = idxObj[name]
        const preName = players[idx-1]
      
        players[idx-1] = name
        players[idx] = preName
      
        idxObj[name] = idx - 1
        idxObj[preName] = idx
    }

    return players
}