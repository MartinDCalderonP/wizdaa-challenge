'use client'

import React from 'react'
import useStopwatch from '@/hooks/useStopwatch'

const Stopwatch = () => {
  const { timer, startTimer, stopTimer, resetTimer } = useStopwatch()

  const buttons = [
    { label: 'Start', fn: startTimer },
    { label: 'Stop', fn: stopTimer },
    { label: 'Reset', fn: resetTimer }
  ]

  return (
    <div>
      {timer}
      {buttons.map((button) => (
        <button key={button.label} onClick={() => button.fn}>
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default Stopwatch
