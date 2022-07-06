import { useEffect, useRef, useState } from 'react'

const easeOutExpo = (x: number) => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

function useCounter(endPoint: number, duration: number, delay: number) {
  const [count, setCount] = useState(0)
  const [isDelay, setIsDelay] = useState(false)

  const animation = useRef(0)
  const startTime = useRef<number>()
  const timerDelay = useRef<NodeJS.Timer>()

  useEffect(() => {
    if (!isDelay) {
      return
    }

    const onFrame = () => {
      const timestamp = new Date().getTime()

      if (!startTime.current) {
        startTime.current = timestamp
      }

      const progress = easeOutExpo((timestamp - startTime.current) / duration)
      const currentCount = Math.round(endPoint * progress)

      setCount(currentCount)

      animation.current = requestAnimationFrame(onFrame)

      if (endPoint === currentCount) {
        cancelAnimationFrame(animation.current)
      }
    }

    onFrame()

    return () => {
      cancelAnimationFrame(animation.current)
    }
  }, [duration, endPoint, isDelay])

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
