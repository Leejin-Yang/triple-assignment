import { useEffect, useRef, useState } from 'react'

const easeOutExpo = (x: number) => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

const FRAME_DURATION = 1000 / 60

function useCounter(endPoint: number, duration: number, delay: number) {
  const frame = useRef(0)
  const [count, setCount] = useState(0)

  const totalFrames = Math.round(duration / FRAME_DURATION)

  useEffect(() => {
    const onFrame = () => {
      const progress = easeOutExpo(frame.current / totalFrames)
      const currentCount = Math.round(endPoint * progress)

      setCount(currentCount)

      frame.current = requestAnimationFrame(onFrame)

      if (endPoint === currentCount) {
        cancelAnimationFrame(frame.current)
      }
    }

    const timerDelay = setTimeout(onFrame, delay)

    return () => {
      cancelAnimationFrame(frame.current)
      clearTimeout(timerDelay)
    }
  }, [delay, endPoint, totalFrames])

  return count
}

export default useCounter
