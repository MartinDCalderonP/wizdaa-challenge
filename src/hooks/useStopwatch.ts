import { useState, useEffect } from 'react'

const useStopwatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } else {
      clearInterval(timer)
    }

    return () => clearInterval(timer)
  }, [isRunning])

  const startTimer = () => setIsRunning(true)
  const stopTimer = () => setIsRunning(false)
  const resetTimer = () => setTime(0)

  return { time, isRunning, startTimer, stopTimer, resetTimer }
}

export default useStopwatch
