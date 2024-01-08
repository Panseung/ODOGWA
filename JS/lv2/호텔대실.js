function solution(book_time) {
  const bookList = book_time.map((v) => {
    const start = v[0]
    const end = v[1]
    const [startHour, startMinute] = start.split(':').map(Number)
    const [endHour, endMinute] = end.split(':').map(Number)
    const startTime = startHour * 60 + startMinute
    const endTime = endHour * 60 + endMinute
    return [startTime, endTime]
  })
  const sortedBookList = bookList.sort((a, b) => a[0] - b[0])

  const roomEndTimeList = [[0]]
  let roomCnt = 1
  let bookIdx = 0
  while (bookIdx < sortedBookList.length) {
    const bookTimes = sortedBookList[bookIdx]
    const startTime = bookTimes[0]
    const endTime = bookTimes[1]
    let findRoom = false
    let roomIdx = 0
    while (!findRoom && roomIdx < roomCnt) {
      if (roomEndTimeList[roomIdx] <= startTime) {
        findRoom = true
        roomEndTimeList[roomIdx] = endTime + 10
      }
      roomIdx += 1
    }
    if (!findRoom) {
      roomEndTimeList.push(endTime + 10)
      roomCnt += 1
    }
    bookIdx += 1
  }
  return roomCnt
}