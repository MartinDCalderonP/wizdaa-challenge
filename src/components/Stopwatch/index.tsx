'use client'

import React from 'react'
import styles from './styles.module.css'
import useStopwatch from '@/hooks/useStopwatch'
import { formattedTime } from '@/utils'

const Stopwatch = () => {
  const { time, startTimer, stopTimer, resetTimer } = useStopwatch()

  const buttons = [
    { label: 'Start', fn: startTimer },
    { label: 'Stop', fn: stopTimer },
    { label: 'Reset', fn: resetTimer }
  ]

  return (
    <div className={styles.stopwatch}>
      <span className={styles.time}>{formattedTime(time)}</span>

      <div className={styles.buttonsContainer}>
        {buttons.map((button) => (
          <button
            key={button.label}
            className={styles.button}
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
