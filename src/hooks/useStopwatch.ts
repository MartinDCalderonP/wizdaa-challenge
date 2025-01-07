import { useState, useRef } from 'react'

const useStopwatch = () => {
  const [timer, setTimer] = useState(0)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const startTimer = () => {
    timeoutRef.current = setTimeout(function updatedTimer() {
      setTimer((prev) => prev + 1)
      timeoutRef.current = setTimeout(updatedTimer, 1000)
    }, 1000)
  }

  const stopTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setTimer(0)
  }

  return { timer, startTimer, stopTimer, resetTimer }
}

export default useStopwatch
