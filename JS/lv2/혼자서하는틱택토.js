function solution(board) {
  let cntO = 0
  let cntX = 0

  for (let y = 0; y < 3; y ++) {
    for (let x = 0; x < 3; x ++) {
      if (board[y][x] === 'O') {
        cntO += 1
      } else if (board[y][x] === 'X') {
        cntX += 1
      }
    }
  }

  let threeCntO = 0
  let threeCntX = 0
  const diagonal1 = board[0][0] + board[1][1] + board[2][2]
  const diagonal2 = board[2][0] + board[1][1] + board[0][2]

  if (diagonal1 === 'OOO') {
    threeCntO += 1
  } else if (diagonal1 === 'XXX') {
    threeCntX += 1
  }
  if (diagonal2 === 'OOO') {
    threeCntO += 1
  } else if (diagonal2 === 'XXX') {
    threeCntX += 1
  }

  for (let i = 0; i < 3; i ++) {
    let width = ''
    let height = ''
    width += board[i][0]
    width += board[i][1]
    width += board[i][2]
    height += board[0][i]
    height += board[1][i]
    height += board[2][i]

    if (width === 'OOO') {
      threeCntO += 1
    } else if (width === 'XXX') {
      threeCntX += 1
    }
    if (height === 'OOO') {
      threeCntO += 1
    } else if (height === 'XXX') {
      threeCntX += 1
    }
  }      

  if (cntX > cntO || cntO - cntX >= 2) {
    return 0
  }
  if (threeCntO && threeCntX) {
    return 0
  }
  if (threeCntO && (cntO === cntX)) {
    return 0
  }
  if (threeCntX && (cntO > cntX)) {
    return 0
  }

  return 1
}