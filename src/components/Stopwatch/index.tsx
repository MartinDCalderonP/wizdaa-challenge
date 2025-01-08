'use client'

import React from 'react'
import styles from './styles.module.css'
import useStopwatch from '@/hooks/useStopwatch'
import { formattedTime } from '@/utils'
import { motion } from 'framer-motion'

const Stopwatch = () => {
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useStopwatch()

  const buttons = [
    { label: 'Start', fn: startTimer, disabled: isRunning },
    { label: 'Stop', fn: stopTimer, disabled: !isRunning },
    { label: 'Reset', fn: resetTimer, disabled: time === 0 }
  ]

  return (
    <div className={styles.stopwatch}>
      <div className={styles.timeWrapper}>
        <motion.span
          initial={{
            color: '#fff',
            fontSize: '2rem',
            fontWeight: 'normal',
            opacity: 0.5
          }}
          animate={{
            color: isRunning ? '#ff6347' : '#fff',
            fontSize: isRunning ? '3rem' : '2rem',
            fontWeight: isRunning ? 'bold' : 'normal',
            opacity: isRunning ? 1 : 0.5,
            rotate: time === 0 ? 360 : 0,
            scale: [1, 1.2, 1] // Add scale animation
          }}
          transition={{ duration: 0.5 }}
        >
          {formattedTime(time)}
        </motion.span>

        {time % 60 === 0 && time !== 0 && (
          <motion.span
            className={styles.minuteAdded}
            initial={{ y: 10, opacity: 1 }}
            animate={{ y: -20, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            +1 Minute!
          </motion.span>
        )}
      </div>

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
