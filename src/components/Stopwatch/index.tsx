'use client'

import React from 'react'
import styles from './styles.module.css'
import useStopwatch from '@/hooks/useStopwatch'

const Stopwatch = () => {
  const { timer, startTimer, stopTimer, resetTimer } = useStopwatch()

  const buttons = [
    { label: 'Start', fn: startTimer },
    { label: 'Stop', fn: stopTimer },
    { label: 'Reset', fn: resetTimer }
  ]

  return (
    <div className={styles.stopwatch}>
      <span className={styles.timer}>{timer}</span>
      <div className={styles.buttonsContainer}>
        {buttons.map((button) => (
          <button
            key={button.label}
            className={styles.button}
            onClick={() => button.fn}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Stopwatch
