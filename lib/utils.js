export const fmtDate = (date) => {
  const month = date.slice(5, 7)
  const day = date.slice(8, 10)
  return String(Number(month)) + '月' + String(Number(day)) + '日'
}
