import moment from 'moment/moment'
import React, { useState, useRef, useEffect } from 'react'
import * as workerTimers from 'worker-timers'
import './EventTimer.css'

const EventTimer = ({ eventData }) => {


    const [countDownDays, setDays] = useState('00')
    const [countDownHours, setHours] = useState('00')
    const [countDownMinutes, setMinutes] = useState('00')
    const [countDownSeconds, setSeconds] = useState('00')

    let startTimestamp = `${eventData.start_date} ${eventData.start_time}`

    let interval = useRef()
    const [componentDidMount, setComponentDidMount] = useState(false)


    const startTimer = () => {
        workerTimers.setInterval(() => {
            const tillDate = moment.utc(startTimestamp).local().valueOf();
            let now = moment().valueOf();
            let duration = tillDate - now;
            let days = Math.floor(duration / (1000 * 60 * 60 * 24))
            let hours = Math.floor((duration % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            let minutes = Math.floor((duration % (1000 * 60 * 60) / (1000 * 60)))
            let seconds = Math.floor((duration % (1000 * 60) / 1000))

            if (duration < 0) {
                clearInterval(interval.current);
            } else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer();
        workerTimers.setTimeout(() => setComponentDidMount(true), 1000)
        return () => {
            clearInterval(interval.current);
        }
    }, [])

    return (
        <>
            {(componentDidMount && countDownMinutes !== "00" && countDownSeconds !== "00") && (
                <>
                    <p className='mb-1'>EVENT STARTS IN</p>
                    <div className="event-timer-container">
                        <span>{countDownDays}D</span> : <span>{countDownHours}H</span> : <span>{countDownMinutes}M</span> : <span>{countDownSeconds}S</span>
                    </div>
                </>
            )}
        </>
    )
}

export default EventTimer