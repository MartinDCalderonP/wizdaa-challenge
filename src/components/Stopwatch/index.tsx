'use client'

import React from 'react'
import styles from './styles.module.css'
import useStopwatch from '@/hooks/useStopwatch'
import { formattedTime } from '@/utils'

const Stopwatch = () => {
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useStopwatch()

  const buttons = [
    { label: 'Start', fn: startTimer, disabled: isRunning },
    { label: 'Stop', fn: stopTimer, disabled: !isRunning },
    { label: 'Reset', fn: resetTimer, disabled: time === 0 }
  ]

  return (
    <div className={styles.stopwatch}>
      <span className={styles.time}>{formattedTime(time)}</span>

      <div className={styles.buttonsContainer}>
        {buttons.map((button) => (
          <button
            key={button.label}
            className={styles.button}
            disabled={button.disabled}
            onClick={button.fn}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Stopwatch
