"use client"

import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { Time } from './Timer.lib'

export const Timer = forwardRef(function Timer({...props }, ref) {
    const timerRef = useRef<HTMLDivElement>(null)
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout>()

    useImperativeHandle(ref, () => startTimer, [])

    function startTimer() {
        if (intervalId) clearInterval(intervalId)

        const newIntervalId = setInterval(() => {
            if (!timerRef.current) return
    
            time.increment()
            timerRef.current.innerHTML = 
                `${time.hours}:${time.minutes}:${time.seconds}`
            
        }, 1000)

        setIntervalId(newIntervalId)
    }
    const time = new Time()

    return <div {...props} ref={timerRef}>{time.hours}:{time.minutes}:{time.seconds}</div>
}) 