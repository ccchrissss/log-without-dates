function checkLogs(log) {
  
  let previous = '99:99:99'
  let dayCount = 0

  log.forEach( e => {
    if (e <= previous) {
      dayCount++
    }
    previous = e
  })

  return dayCount

}

console.log(checkLogs(['00:00:23', '22:13:00', '12:12:12', '23:51:03']))