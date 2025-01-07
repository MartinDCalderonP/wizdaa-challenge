const addZero = (num: number): string => {
  return num.toString().padStart(2, '0')
}

export const formattedTime = (time: number): string => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return `${addZero(minutes)}:${addZero(seconds)}`
}
