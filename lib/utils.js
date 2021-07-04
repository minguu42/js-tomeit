export const fmtDatetimeForDate = (datetime) => {
  const month = datetime.slice(5, 7)
  const day = datetime.slice(8, 10)
  return String(Number(month)) + '月' + String(Number(day)) + '日'
}

export const fmtDatetimeForTime = (datetime) => {
  const hours = datetime.slice(11, 13)
  const minutes = datetime.slice(14, 16)
  return hours + '：' + minutes

export const convertSecondsIntoMinutes = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const restSeconds = seconds % 60
  return String(minutes).padStart(2, '0') + ':' + String(restSeconds).padStart(2, '0')
