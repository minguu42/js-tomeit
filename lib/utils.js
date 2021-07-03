export const fmtDate = (date) => {
  const month = date.slice(5, 7)
  const day = date.slice(8, 10)
  return String(Number(month)) + '月' + String(Number(day)) + '日'
}

export const convertSecondsIntoMinutes = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const restSeconds = seconds % 60
  return String(minutes).padStart(2, '0') + ':' + String(restSeconds).padStart(2, '0')
}
