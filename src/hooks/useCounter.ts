import { useEffect, useRef, useState } from 'react'

const easeOutExpo = (x: number) => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

const FRAME_DURATION = 1000 / 60

function useCounter(endPoint: number, duration: number, delay: number) {
  const [count, setCount] = useState(0)
  const [isDelay, setIsDelay] = useState(false)

  const frame = useRef(0)
  const timerDelay = useRef<NodeJS.Timer>()

  const totalFrames = Math.round(duration / FRAME_DURATION)

  useEffect(() => {
    if (!isDelay) {
      return
    }

    const onFrame = () => {
      const progress = easeOutExpo(frame.current / totalFrames)
      const currentCount = Math.round(endPoint * progress)

      setCount(currentCount)

      frame.current = requestAnimationFrame(onFrame)

      if (endPoint === currentCount) {
        cancelAnimationFrame(frame.current)
      }
    }

    onFrame()

    return () => {
      cancelAnimationFrame(frame.current)
    }
  }, [endPoint, isDelay, totalFrames])

  useEffect(() => {
    timerDelay.current = setTimeout(() => {
      setIsDelay(true)
    }, delay)

    return () => {
      clearTimeout(timerDelay.current)
    }
  }, [delay])

  return count
}

export default useCounter
