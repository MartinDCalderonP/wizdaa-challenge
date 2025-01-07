import { useEffect, useState, useRef } from 'react'

const useStopwatch = () => {
  const [timer, setTimer] = useState(0)

  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  const startTimer = () => {
    timeoutId.current = setTimeout(function tick() {
      setTimer((prev) => prev + 1)
      timeoutId.current = setTimeout(tick, 1000)
    }, 1000)
  }

  const stopTimer = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }
  }

  const resetTimer = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }
    setTimer(0)
    return () => {}
  }

  useEffect(() => {
    startTimer()
    return () => clearTimeout(timeoutId.current as NodeJS.Timeout)
  }, [])

  return { timer, startTimer, stopTimer, resetTimer }
}

export default useStopwatch
