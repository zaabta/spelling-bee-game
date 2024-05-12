'use client'
import React, { useState, useEffect } from 'react'

export type TimerProps = {
  onFinish?: () => void
  seconds: number
  setSeconds: React.Dispatch<React.SetStateAction<number>>
}

export const Timer = ({ onFinish, seconds, setSeconds }: TimerProps) => {
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined = undefined

    if (seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1)
      }, 1000)
    } else {
      clearInterval(timer!)
      onFinish?.()
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [seconds, onFinish])

  return (
    <div
      style={{
        textAlign: 'end',
        padding: "1vw"
      }}
    >
      <span>{seconds} seconds left</span>
    </div>
  )
}
