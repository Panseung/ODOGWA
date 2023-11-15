function solution(wallpaper) {
  let lux = wallpaper[0].length, luy = wallpaper.length, rdx = 1, rdy = 1

  for (let y = 0; y < wallpaper.length; y ++) {
    const line = wallpaper[y]
    for (let x = 0; x < line.length; x ++) {
      if (line[x] === '#') {
        lux = lux > x ? x : lux
        luy = luy > y ? y : luy
        rdx = rdx > x + 1 ? rdx : x + 1
        rdy = rdy > y + 1 ? rdy : y + 1
      }
    }
  }
  
  var answer = [luy, lux, rdy, rdx];
  return answer;
}